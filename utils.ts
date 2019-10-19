///<reference path="globals.d.ts"/>

import { blocks, camel2Dash, JsonPlugin, Webpacker } from '@radic/webpacker';
import { basename, dirname, join, relative, resolve } from 'path';
import glob, { IOptions } from 'glob';
import { existsSync, statSync } from 'fs';
import { config } from 'dotenv';
import { IPackageJson } from 'package-json-type';
import webpack from 'webpack';


const { parsed: env } = config({
    debug: true
})

export {env}

export interface PackageJson extends IPackageJson {
    pyro?: {
        srcPath: string
        entry: {
            development: string
            production: string
            testing: string
        }
    }
}

export const { presets, rules, plugins, helpers, loaders } = blocks;


export function setupWebpacker(path) {
    const wp = new Webpacker({
        mode       : process.env.NODE_ENV === 'development' ? 'development' : 'production',
        path,
        contextPath: path,
        sourceMap  : process.env.NODE_ENV === 'development'
    });
    wp.settings.set('babel', {
        babelrc       : false,
        configFile    : false,
        cacheDirectory: false, //wp.isDev,
        compact       : wp.isProd,
        sourceMaps    : wp.isDev,
        comments      : wp.isDev,
        presets       : [ [ '@vue/babel-preset-app' ] ],
        plugins       : [
            // [ 'component', {
            //     libraryName     : 'element-ui',
            //     styleLibraryName:'~element-ui-theme',
            //     // styleLibrary:{
            //     //     name:  '~element-ui-theme',
            //     //     path: '[module]/lib/index.css'
            //     // },
            //     libDir: 'lib',
            //     style: 'lib/index.css'
            // } ]
        ]
    });

    wp.module.rule('babel').test(/\.(js|mjs|jsx)$/).exclude.add(/node_modules/);
    wp.module.rule('typescript').test(/\.(ts|tsx)$/).exclude.add(/node_modules/);

    wp.resolveLoader.symlinks(true);
    wp.resolve.symlinks(true);

    wp.output
        .library([ 'pyro', '[name]' ] as any)
        .libraryTarget('window')
        .filename('js/[name].js')
        .chunkFilename('js/[name].chunk.[id].js');

    rules.css(wp);
    rules.scss(wp, {
        scss: {
            implementation: require('sass')
        }
    });
// wp.module.rule('scss').use('save-content-loader').loader(resolve(__dirname, 'save-content-loader')).options({
//     name: 'babel',
// });
    rules.stylus(wp);
    rules.images(wp);
    rules.fonts(wp, { publicPath: '/assets/fonts/' });
    rules.vue(wp)
    //     compiler:''
    //     tsx: ''
    // });
    rules.pug(wp);

    rules.babel(wp);
// rules.cache(wp, {}, 'typescript')
// rules.thread(wp, {}, 'typescript')
// wp.module.rule('typescript').use('save-content-loader').loader(resolve(__dirname, 'save-content-loader')).options({
//     name: 'babel',
// });
    rules.babel(wp, {}, 'typescript');
// wp.module.rule('typescript').use('save-content-loader').loader(resolve(__dirname, 'save-content-loader')).options({
//     name: 'typescript',
// });
    rules.typescript(wp, {
        appendTsSuffixTo: [ /.vue$/ ],
        configFile      : 'tsconfig.json',
        transpileOnly   : true,
        // experimentalWatchApi: true,
        // happyPackMode   : true,
        compilerOptions : {
            target        : 'es5' as any,
            module        : 'esnext' as any,
            importHelpers : true,
            // allowJs       : true,
            sourceMap     : wp.isDev,
            removeComments: wp.isProd
        }
    });
    rules.typescriptImport(wp, [
        rules.typescriptImportPresets.lodash,
        {
            libraryName            : 'element-ui',
            libraryDirectory       : 'lib',
            camel2DashComponentName: true,

            style: (path: string) => {
                let out = join('node_modules', 'element-theme-scss', 'src', `${camel2Dash(basename(path, '.js'))}.scss`);
                // process.stderr.write('element ui path: [' + path + ']      out: ' + out);
                return out;
            }
        }
    ]);
    plugins.friendlyErrors(wp);
    plugins.bar(wp);
    plugins.bundleAnalyzer(wp, {
        reportFilename: resolve(__dirname, 'bundle-analyzer.html')
    });
    plugins.vueLoader(wp);
    plugins.define(wp, {
        DEV          : wp.isDev,
        PROD         : wp.isProd,
        HOT          : wp.isHot,
        ENV          : process.env.NODE_ENV,
        'process.env': {
            NODE_ENV: `"#{process.env.NODE_ENV}"`
        }
    });

    rules.expose(wp, 'inversify')
    rules.expose(wp, 'tapable')
    rules.expose(wp, { name: `lodash`, as: '_' })
    // rules.expose(wp, { name: 'vue', as: 'Vue' })
    rules.expose(wp, { name: 'reflect-metadata', as: 'reflect_metadata' });

    wp.resolve.modules.merge([ resolve(__dirname, 'node_modules') ])
    wp.resolve.alias.merge({
        'jquery$'                            : 'jquery/src/jquery',
        'quasar$'                            : 'quasar/dist/quasar.esm.js',
        // 'vue$'                               : 'vue/dist/vue.esm.js',
        'babel-core$'                        : '@babel/core',
        'select2$'                           : wp.isProd ? 'select2/dist/js/select2.min.js' : 'select2/dist/js/select2.full.js',
        // './../utilities'                     : 'packages/pyradic/platform/lib/vendor/utilities.js'),
        '@c'                                 : resolve(__dirname, 'packages/pyro/platform/lib/classes/'),
        '@u'                                 : resolve(__dirname, 'packages/pyro/platform/lib/utils/'),
        '@'                                  : resolve(__dirname, 'packages/pyro/platform/lib/'),
        '#'                                  : resolve(__dirname, 'packages/pyro/platform/lib/components/'),
        'node_modules/element-theme-scss/lib': resolve(__dirname, 'packages/element-ui-theme/lib'),
        'node_modules/element-theme-scss/src': resolve(__dirname, 'packages/element-ui-theme/src'),
        'streams::'                          : resolve(__dirname, 'vendor/anomaly/streams-platform/resources')
    });

    wp.externals({
        'jquery'                : 'jQuery',
        'vue'                   : 'Vue',
        'vue-class-component'   : 'VueClassComponent',
        'vue-property-decorator': 'vue-property-decorator',
        'bootstrap'             : 'jQuery'
        // '@pyro/admin'   : [ 'pyro', 'admin' ],
        // '@pyro/platform': [ 'pyro', 'platform' ],
        // '@pyro/ex2'     : [ 'pyro', 'ex2' ],
        // '@pyro/menus'   : [ 'pyro', 'menus' ],
        // '@pyro/clients' : [ 'pyro', 'clients' ],
        // '@pyro/select2' : [ 'pyro', 'select2' ]
        // 'quasar'                : 'Quasar'
    });

    JsonPlugin.webpackJson.filePath = resolve(__dirname, env.WEBPACK_PATH);
    JsonPlugin.webpackJson.ensureRemoved();

    return wp;
}

export function getTemplatedPathOptions(addons: Addon[]) {
    let templatedPaths = {
        templates: {
            addon: (c, p) => {
                let addon = addons.find(a => a.entryName === c.chunkName);
                if ( !addon ) {
                    return false;
                }
                if ( !p.hasArg ) {
                    return addon.path;
                }
                if ( typeof addon[ p.arg ] === 'string' ) {
                    return addon[ p.arg ];
                }
                return false;
            }
        }
    }
    return templatedPaths;
}

// plugins.templatedPath = Webpacker.plugin('templated-path', (w, p) => [])

export class Addon {
    pkg: PackageJson;
    pkgPath: string;
    path: string;
    relativePath: string;

    constructor(path: string) {
        this.path         = path;
        this.relativePath = relative(process.cwd(), path)
        this.pkgPath      = join(path, 'package.json');
        this.pkg          = require(this.pkgPath);
    }

    get name(): string {
        return this.pkg.name;
    }

    get firstName(): string {return this.name.split('/')[ 0 ];}

    get firstNameSnake(): string {return this.firstName.replace(/-/g, '_').replace(/@/g, '');}

    get lastName(): string {return this.name.split('/')[ 1 ];}

    get lastNameSnake(): string {return this.lastName.replace(/-/g, '_');}

    get entryName(): string {return this.firstNameSnake + '__' + this.lastNameSnake }

    get srcPath() {
        return join(this.path, this.pkg.pyro.srcPath);
    }

    get entry() {
        return {
            development: join(this.srcPath, this.pkg.pyro.entry.development),
            production : join(this.srcPath, this.pkg.pyro.entry.production)
        };
    }

    getPath(...parts: string[]) {
        return join(this.path, ...parts);
    }

    getRPath(...parts: string[]) {
        // to=this.path.replace(to + '/','')
        return join(this.relativePath, ...parts)
    }

    add(wp: Webpacker) {
        wp.externals({
            ...wp.get('externals'),
            [ this.name ]: [ 'pyro', this.lastNameSnake ]
        });
        wp.entry(this.lastNameSnake).add(wp.isDev ? this.entry.development : this.entry.production);
        // wp.entry(this.path).add(wp.isDev ? this.entry.development : this.entry.production)
        return this;
    }
}

export class AddonFinder {
    globOptions: IOptions = {};
    globs: string[]       = [
        'addons/shared/*/*/package.json',
        'addons/*/*/package.json'
        // 'core/*/*/package.json'
    ];
    cwd                   = process.cwd()

    static make(globs: string[] = []): AddonFinder {
        const finder = new this();
        finder.globs = globs;
        return finder;
    }

    excluded: string[] = [];

    exclude(...addonNames) {
        this.excluded.push(...addonNames)
        return this;
    }

    find(): Addon[] {
        let paths: string[] = [];
        this.globs.forEach(pattern => paths = paths.concat(glob.sync(join(this.cwd, pattern), this.globOptions)));

        let addons = paths
            .filter(path => this.checkPathHasAddon(path))
            .map(path => this.transformPackagePathToDir(path))
            .map(path => new Addon(path));

        addons = addons.filter(addon => this.excluded.includes(addon.name) === false)

        return addons;
    }

    checkPathHasAddon(path) {
        let pathStat = statSync(path);
        if ( pathStat.isFile() && basename(path) === 'package.json' ) {
            return this.checkPackageIsAddon(path);
        } else if ( pathStat.isDirectory() && existsSync(join(path, 'package.json')) ) {
            return this.checkPackageIsAddon(join(path, 'package.json'));
        }
        return false;
    }

    protected transformPackagePathToDir(path) {
        if ( basename(path) === 'package.json' ) {
            return dirname(path);
        }
        return path;
    }

    protected checkPackageIsAddon(packageFilePath) {
        const pkg: PackageJson = require(packageFilePath);
        return 'pyro' in pkg;
    }
}


const INDENT            = 2;
const DEFAULT_TRANSFORM = (data) => JSON.stringify(data, null, INDENT);

export interface StatsWriterPluginOptions {
    filename?: string
    fields?: Array<keyof webpack.Stats.ToJsonOutput>
    stats?: any
    transform?: any
}

/**
 * Stats writer module.
 *
 * Stats can be a string or array (we'll have array due to source maps):
 *
 * ```js
 * "assetsByChunkName": {
 *   "main": [
 *     "cd6371d4131fbfbefaa7.bundle.js",
 *     "../js-map/cd6371d4131fbfbefaa7.bundle.js.map"
 *   ]
 * },
 * ```
 *
 * **Note**: The stats object is **big**. It includes the entire source included
 * in a bundle. Thus, we default `opts.fields` to `["assetsByChunkName"]` to
 * only include those. However, if you want the _whole thing_ (maybe doing an
 * `opts.transform` function), then you can set `fields: null` in options to
 * get **all** of the stats object.
 *
 * You may also pass a custom stats config object (or string preset) via `opts.stats`
 * in order to select exactly what you want added to the data passed to the transform.
 * When `opts.stats` is passed, `opts.fields` will default to `null`.
 *
 * See:
 * - https://webpack.js.org/configuration/stats/#stats
 * - https://webpack.js.org/api/node/#stats-object
 *
 * **`filename`**: The `opts.filename` option can be a file name or path relative to
 * `output.path` in webpack configuration. It should not be absolute.
 *
 * **`transform`**: By default, the retrieved stats object is `JSON.stringify`'ed
 * but by supplying an alternate transform you can target _any_ output format.
 * See [`test/webpack4/webpack.config.js`](test/webpack4/webpack.config.js) for
 * various examples including Markdown output.
 *
 * - **Warning**: The output of `transform` should be a `String`, not an object.
 *   On Node `v4.x` if you return a real object in `transform`, then webpack
 *   will break with a `TypeError` (See #8). Just adding a simple
 *   `JSON.stringify()` around your object is usually what you need to solve
 *   any problems.
 *
 * @param {Object}   opts           options
 * @param {String}   opts.filename  output file name (Default: `"stats.json`")
 * @param {Array}    opts.fields    fields of stats obj to keep (Default: `["assetsByChunkName"]`)
 * @param {Object|String}    opts.stats     stats config object or string preset (Default: `{}`)
 * @param {Function|Promise} opts.transform transform stats obj (Default: `JSON.stringify()`)
 *
 * @api public
 */
export class StatsWriterPlugin {
    opts: StatsWriterPluginOptions

    constructor(opts: StatsWriterPluginOptions) {
        opts                = opts || {};
        this.opts           = {};
        this.opts.filename  = opts.filename || 'stats.json';
        this.opts.fields    = typeof opts.fields !== 'undefined' ? opts.fields : [ 'assetsByChunkName' ];
        this.opts.stats     = opts.stats || {};
        this.opts.transform = opts.transform || DEFAULT_TRANSFORM;

        if ( typeof opts.stats !== 'undefined' && typeof opts.fields === 'undefined' ) {
            // if custom stats config provided, do not filter fields unless explicitly configured
            this.opts.fields = null;
        }
    }

    apply(compiler) {
        if ( compiler.hooks ) {
            compiler.hooks.emit.tapPromise('stats-writer-plugin', this.emitStats.bind(this));
        } else {
            compiler.plugin('emit', this.emitStats.bind(this));
        }
    }

    emitStats(curCompiler, callback) {
        // Get stats.
        // The second argument automatically skips heavy options (reasons, source, etc)
        // if they are otherwise unspecified.
        let stats = curCompiler.getStats().toJson(this.opts.stats, 'forToString');

        // Filter to fields.
        if ( this.opts.fields ) {
            stats = this.opts.fields.reduce((memo, key) => {
                memo[ key ] = stats[ key ];
                return memo;
            }, {});
        }

        // Transform to string.
        let err;
        return Promise.resolve()

        // Transform.
            .then(() => this.opts.transform(stats, {
                compiler: curCompiler
            }))
            .catch((e) => { err = e; })

            // Finish up.
            .then((statsStr) => {
                // Handle errors.
                if ( err ) {
                    curCompiler.errors.push(err);
                    if ( callback ) { return void callback(err); }
                    throw err;
                }

                // Add to assets.
                curCompiler.assets[ this.opts.filename ] = {
                    source() {
                        return statsStr;
                    },
                    size() {
                        return statsStr.length;
                    }
                };

                if ( callback ) { return void callback(); }
            });
    }
}

