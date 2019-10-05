import { blocks, camel2Dash, JsonPlugin, Webpacker } from '@radic/webpacker';
import { basename, dirname, join, resolve } from 'path';
import { Configuration } from 'webpack';
import { PackageJson } from './packages/@pyro-build-tools/src/interfaces';
import glob, { IOptions } from 'glob';
import { existsSync, statSync, symlinkSync, unlinkSync } from 'fs';
import { ExtraTemplatedPathsPlugin } from './packages/@pyro-build-tools/src/webpack/ExtraTemplatedPathsPlugin';
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

    const outputPath   = (...parts) => resolve(__dirname, 'addons/shared/pyro', ...parts);
    const addonSrcPath = (addonName: string, ...parts: string[]) => outputPath(addonName, 'lib', ...parts);

    wp.module.rule('babel').test(/\.(js|mjs|jsx)$/).exclude.add(/node_modules/);
    wp.module.rule('typescript').test(/\.(ts|tsx)$/).exclude.add(/node_modules/);

    // ensureLink('core/pyrocms/accelerant-theme', 'node_modules/accelerant-theme')
// ensureLink('packages/element-ui-theme', 'node_modules/element-theme-scss')


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
        // '@pyro/platform'                     : resolve(__dirname, 'packages/pyradic/platform/lib/platform.ts'),
        'node_modules/element-theme-scss/lib': resolve(__dirname, 'packages/element-ui-theme/lib'),
        'node_modules/element-theme-scss/src': resolve(__dirname, 'packages/element-ui-theme/src')
    });

    wp.externals({
        'jquery'        : 'jQuery',
        // 'vue'                   : 'Vue',
        // 'vue-class-component'   : 'VueClassComponent',
        // 'vue-property-decorator': 'vue-property-decorator',
        'bootstrap'     : 'jQuery',
        '@pyro/admin'   : [ 'pyro', 'admin' ],
        '@pyro/platform': [ 'pyro', 'platform' ],
        '@pyro/ex2'     : [ 'pyro', 'ex2' ],
        '@pyro/menus'   : [ 'pyro', 'menus' ],
        '@pyro/clients' : [ 'pyro', 'clients' ],
        '@pyro/select2' : [ 'pyro', 'select2' ]
        // 'quasar'                : 'Quasar'
    });

    JsonPlugin.webpackJson.filePath = resolve(__dirname, 'config', 'webpack.json');
    JsonPlugin.webpackJson.ensureRemoved();

    return wp;
}

export class Links {
    static linked = [];

    public static ensureLink(src: string, dest: string) {
        this.ensureExitHandlers();
        src  = resolve(__dirname, src);
        dest = resolve(__dirname, dest);
        existsSync(dest) && unlinkSync(dest);
        symlinkSync(src, dest, 'dir');
        this.linked.push(dest);
        return this;
    }

    private static enabledExitHandlers = false;

    protected static ensureExitHandlers() {
        if ( this.enabledExitHandlers ) {
            return;
        }

        const exitHandler = (options, exitCode) => {
            if ( options.cleanup ) console.log('clean');
            this.linked.forEach(path => {

                if ( existsSync(path) ) {
                    unlinkSync(path);
                    console.log('Cleaned ', path);
                }
            });
            if ( exitCode || exitCode === 0 ) console.log(exitCode);
            if ( options.exit ) process.exit();
        };


        process.stdin.resume();//so the program will not close instantly
        process.on('exit', exitHandler.bind(null, { cleanup: true }));//do something when app is closing
        process.on('SIGINT', exitHandler.bind(null, { exit: true }));//catches ctrl+c event
        process.on('SIGUSR1', exitHandler.bind(null, { exit: true }));// catches "kill pid" (for example: nodemon restart)
        process.on('SIGUSR2', exitHandler.bind(null, { exit: true }));// catches "kill pid" (for example: nodemon restart)
        process.on('uncaughtException', exitHandler.bind(null, { exit: true }));//catches uncaught exceptions

        this.enabledExitHandlers = true;
    }
}


export class Paths {
    protected static _root;

    public static setRoot(root: string) {
        this._root = root;
        return this;
    }

    public static root(...parts: string[]): string {
        if ( this._root === undefined ) {
            this._root = process.cwd();
        }
        return resolve(this._root, ...parts);
    }


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

    static make(globs: string[] = []): AddonFinder {
        const finder = new this();
        finder.globs = globs;
        return finder;
    }

    find(): Addon[] {
        let paths: string[] = [];
        this.globs.forEach(pattern => paths = paths.concat(glob.sync(Paths.root(pattern), this.globOptions)));

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

export class Pyro {
    finder: AddonFinder;
    public readonly wp: Webpacker;
    protected addons: Addon[] = [];

    constructor() {
        Paths.setRoot(process.cwd());
        const wp = setupWebpacker(process.cwd());
        this.wp  = wp;
        wp.plugin('extra-templated-paths').use(ExtraTemplatedPathsPlugin as any);
        this.finder = new AddonFinder();

    }

    setRootPath(path: string) {
        Paths.setRoot(path);
        return this;
    }

    rootPath(...parts: string[]): string {
        return Paths.root(...parts);
    }

    setGlobs(globs: string[]) {
        this.finder.globs = globs;
        return this;
    }

    addGlobs(globs: string[]) {
        this.finder.globs.push(...globs);
        return this;
    }

    includeAddon(addon: Addon): this {
        this.addons.push(addon);
        return this;
    }

    toServerConfig(): Configuration {
        for ( const addon of this.addons ) {
            this.wp.externals({
                [ addon.name ]: [ 'pyro', addon.lastNameSnake ]
            });
            this.wp.entry(addon.lastNameSnake).add(this.wp.isDev ? addon.entry.development : addon.entry.production);
        }
        return this.wp.toConfig();
    }

    toBuilderConfig(): Configuration[] {
        let configs: Configuration[] = [];
        for ( const addon of this.addons ) {
            this.wp.externals({
                [ addon.name ]: [ 'pyro', addon.lastNameSnake ]
            });
        }
        this.wp.output
            .path('/')
            .filename('[name]/resources/js/addon.js')
            .library([ 'pyro', 'asfd' ] as any)
            .chunkFilename('[name]/resources/js/chunk.[id].js');

        blocks.plugins.miniCssExtract(this.wp, {
            filename     : '[name]/css/addon.css',
            chunkFilename: '[name]/css/chunk.[id].css'
        });
        for ( const addon of this.addons ) {
            let config = this.wp.toConfig();
            if ( config.bail ) {
                return [ config ];
            }
            this.wp.entry(addon.path).add(this.wp.isDev ? addon.entry.development : addon.entry.production);
            //
            // config.output.publicPath    = '/'
            // config.entry                = {
            //     [ addon.lastNameSnake ]: this.wp.isDev ? addon.entry.development : addon.entry.production
            // }
            // config.output.library       = [ 'pyro', addon.lastNameSnake ];
            // config.output.path          = 'resources'
            // config.output.filename      = 'resources/js/[name].js'
            // config.output.chunkFilename = 'js/[name].chunk.[id].js'
            // config.plugins.push(new MiniCssExtractPlugin({
            //     filename     : 'css/[name].css',
            //     chunkFilename: 'css/[name].[id].css'
            // }))
            // configs.push(config);
        }
        return this.wp.toConfig() as any;
    }

    toConfig() {
        let config: Configuration = {};
        // if(this.wp.isHot){
        //     return this.toServerConfig()
        // }
        // console.dir(config);
        return config;
    }
}


//
//     const ruleReplaceStyleLoader = (rule: string | Rule, options: any = {}, loader: string = MiniCssExtractPlugin.loader) => {
//         if ( typeof rule === 'string' ) {
//             rule = wp.module.rule(rule);
//         }
//         rule.use('style-loader').loader(loader).options(options)
//     }
//
// // let outputPath= (...parts) => resolve(__dirname, '.tmp/out/addons/shared/pyro', ...parts);
//     function createConfig(cb: (config: Configuration) => any): Configuration {
//         let config: Configuration = wp.toConfig() as any;
//         if ( config.bail ) {
//             return config;
//         }
//         config.output.publicPath = '/'
//         cb(config);
//         return config;
//     }
//
//
//     function createCompilerConfig(name: string, dirName: string): Configuration {
//         let entryFileName = `${name}.${process.env.NODE_ENV}.ts`
//         return createConfig((config) => {
//             config.entry                = {
//                 [ name ]: addonSrcPath(dirName, `${name}.development.ts`),
//             }
//             config.output.library       = [ 'pyro', name ];
//             config.output.path          = outputPath(dirName, 'resources')
//             config.output.filename      = 'js/[name].js'
//             config.output.chunkFilename = 'js/[name].chunk.[id].js'
//             config.plugins.push(new MiniCssExtractPlugin({
//                 filename     : 'css/[name].css',
//                 chunkFilename: 'css/[name].[id].css',
//             }))
//         })
//     }
//
//     function getServerConfig(): Webpacker {
//         wp.devtool('#source-map');
//         wp.mode('development')
//
//         wp.module.rules.delete('source-map-loader');
//
//         helpers.setServerLocation(wp, 'http', 'pyradic.local', 8179);
//         helpers.devServer(wp)
//         wp.devServer
//             .overlay(true)
//             .clientLogLevel('debug' as any)
//             .compress(true)
//             .inline(true)
//
//             .hot(true);
//
//         plugins.json(wp, {
//             filePath: resolve(__dirname, 'config', 'webpack.json'),
//         })
//         //
//         //
//         // let config: Configuration = wp.toConfig();
//         // config.entry              = {
//         //     [ 'admin' ]: addonSrcPath('admin-theme', `admin.${process.env.NODE_ENV}.ts`),
//         // };
//         //
//         // // config.devServer.writeToDisk=true;
//         // return config as Configuration;
//         return wp;
//     }
//
//     function getBuilderConfig(): Webpacker {
//
//         wp.settings.sourceMap = true;
//         wp.devtool('#source-map')
//
//         if ( wp.isProd ) {
//             wp
//                 .mode('production')
//                 .optimization.minimize(false)
//             plugins.loaderOptions(wp, {
//                 minimize: false,
//             })
//             // helpers.minimizer(wp)
//         }
//
//         ruleReplaceStyleLoader('scss', { publicPath: '/' });
//         ruleReplaceStyleLoader('stylus', { publicPath: '/' });
//         wp.plugins.delete('miniCssExtract')
//
//
//         return wp;
//         // let config: Configuration | Configuration[]
//         // if ( wp.toConfig().bail ) {
//         //     config = wp.toConfig()
//         // } else {
//         //
//         //     // let adminThemeConfig                     = createCompilerConfig('admin', 'admin-theme');
//         //     // adminThemeConfig.entry[ 'admin' ]        = [
//         //     //     adminThemeConfig.entry[ 'admin' ],
//         //     // ];
//         //     // adminThemeConfig.entry[ 'font-awesome' ] = addonSrcPath('admin-theme', 'styling/font-awesome.scss');
//         //     // adminThemeConfig.entry[ 'bootstrap' ]    = addonSrcPath('admin-theme', 'styling/accelerant-bootstrap.scss');
//         //     let configs: Configuration[] = [
//         //         createCompilerConfig('admin', 'admin-theme'),
//         //     ]
//         //
//         //     config = configs
//         // }
//         //
//         // return config as Configuration;
//     }
//
//     return {
//         wp,
//         createConfig,
//         createCompilerConfig,
//         ruleReplaceStyleLoader,
//         getServerConfig,
//         getBuilderConfig,
//     }
