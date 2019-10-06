import { blocks, camel2Dash, JsonPlugin, Webpacker } from '@radic/webpacker';
import { basename, dirname, join, resolve } from 'path';
import glob, { IOptions } from 'glob';
import { existsSync, statSync } from 'fs';
import { config } from 'dotenv';
import { IPackageJson } from 'package-json-type';

const { parsed: env } = config({
    debug: true
})


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
            [ 'component', {
                libraryName     : 'element-ui',
                styleLibraryName: 'theme-pycrvs'
            } ]
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
    rules.stylus(wp);
    rules.images(wp);
    rules.fonts(wp);
    rules.vue(wp);
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
                process.stderr.write('element ui style path: ' + path);
                let out = join('node_modules', 'element-theme-scss', 'src', `${camel2Dash(basename(path, '.js'))}.scss`);
                process.stderr.write('element ui out: ' + out);
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
    rules.expose(wp, { name: 'vue', as: 'Vue' })
    rules.expose(wp, { name: 'reflect-metadata', as: 'reflect_metadata' });

    wp.resolve.modules.merge([ resolve(__dirname, 'node_modules') ])
    wp.resolve.alias.merge({
        'jquery$'                            : 'jquery/src/jquery',
        'quasar$'                            : 'quasar/dist/quasar.esm.js',
        'vue$'                               : 'vue/dist/vue.esm.js',
        'babel-core$'                        : '@babel/core',
        'select2$'                           : wp.isProd ? 'select2/dist/js/select2.min.js' : 'select2/dist/js/select2.full.js',
        // './../utilities'                     : 'packages/pyradic/platform/lib/vendor/utilities.js'),
        '@c'                                 : resolve(__dirname, 'packages/pyradic/platform/lib/classes/'),
        '@u'                                 : resolve(__dirname, 'packages/pyradic/platform/lib/utils/'),
        '@'                                  : resolve(__dirname, 'packages/pyradic/platform/lib/'),
        '#'                                  : resolve(__dirname, 'packages/pyradic/platform/lib/components/'),
        'node_modules/element-theme-scss/lib': resolve(__dirname, 'packages/element-ui-theme/lib'),
        'node_modules/element-theme-scss/src': resolve(__dirname, 'packages/element-ui-theme/src')
    });

    wp.externals({
        'jquery'   : 'jQuery',
        // 'vue'                   : 'Vue',
        // 'vue-class-component'   : 'VueClassComponent',
        // 'vue-property-decorator': 'vue-property-decorator',
        'bootstrap': 'jQuery'
        // '@pyro/admin'   : [ 'pyro', 'admin' ],
        // '@pyro/platform': [ 'pyro', 'platform' ],
        // '@pyro/ex2'     : [ 'pyro', 'ex2' ],
        // '@pyro/menus'   : [ 'pyro', 'menus' ],
        // '@pyro/clients' : [ 'pyro', 'clients' ],
        // '@pyro/select2' : [ 'pyro', 'select2' ]
        // 'quasar'                : 'Quasar'
    });

    JsonPlugin.webpackJson.filePath = resolve(__dirname, 'config', 'webpack.json');
    JsonPlugin.webpackJson.ensureRemoved();

    return wp;
}

export class Addon {
    pkg: PackageJson;
    pkgPath: string;
    path: string;

    constructor(path: string) {
        this.path    = path;
        this.pkgPath = join(path, 'package.json');
        this.pkg     = require(this.pkgPath);
    }

    get name(): string {
        return this.pkg.name;
    }

    get lastName(): string {return this.name.split('/')[ 1 ];}

    get lastNameSnake(): string {return this.lastName.replace(/-/g, '_');}

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

    find(): Addon[] {
        let paths: string[] = [];
        this.globs.forEach(pattern => paths = paths.concat(glob.sync(join(this.cwd, pattern), this.globOptions)));

        return paths
            .filter(path => this.checkPathHasAddon(path))
            .map(path => this.transformPackagePathToDir(path))
            .map(path => new Addon(path));
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



