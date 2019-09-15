import { blocks, camel2Dash, JsonPlugin, Webpacker } from '@radic/webpacker'
import * as path from 'path';
import { basename, join, resolve } from 'path';
import * as fs from 'fs';
import { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Rule } from 'webpack-chain';


const linked = [];

export function ensureLink(src, dest) {
    let from = path.resolve(__dirname, src)
    let to   = path.resolve(__dirname, dest)

    if ( fs.existsSync(to) ) {
        fs.unlinkSync(to)
    }

    fs.symlinkSync(from, to, 'dir');
    linked.push(to)
}

function exitHandler(options, exitCode) {
    if ( options.cleanup ) console.log('clean');
    linked.forEach(path => {

        if ( fs.existsSync(path) ) {
            fs.unlinkSync(path)
            console.log('Cleaned ', path)
        }
    })
    if ( exitCode || exitCode === 0 ) console.log(exitCode);
    if ( options.exit ) process.exit();
}

process.stdin.resume();//so the program will not close instantly
process.on('exit', exitHandler.bind(null, { cleanup: true }));//do something when app is closing
process.on('SIGINT', exitHandler.bind(null, { exit: true }));//catches ctrl+c event
process.on('SIGUSR1', exitHandler.bind(null, { exit: true }));// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR2', exitHandler.bind(null, { exit: true }));// catches "kill pid" (for example: nodemon restart)
process.on('uncaughtException', exitHandler.bind(null, { exit: true }));//catches uncaught exceptions


const { presets, rules, plugins, helpers } = blocks
export const wp                            = new Webpacker({
    mode     : process.env.NODE_ENV === 'development' ? 'development' : 'production',
    path     : __dirname,
    contextPath: __dirname,
    sourceMap: process.env.NODE_ENV === 'development',
})
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
            styleLibraryName: 'theme-pycrvs',
        } ],
    ],
})
export const outputPath   = (...parts) => resolve(__dirname, 'addons/shared/pyradic', ...parts);
export const addonSrcPath = (addonName: string, ...parts: string[]) => outputPath(addonName, 'lib', ...parts)

wp.module.rule('babel').test(/\.(js|mjs|jsx)$/).exclude.add(/node_modules/);
wp.module.rule('typescript').test(/\.(ts|tsx)$/).exclude.add(/node_modules/);

ensureLink('core/pyrocms/accelerant-theme', 'node_modules/accelerant-theme')
// ensureLink('packages/element-ui-theme', 'node_modules/element-theme-scss')


wp.resolveLoader.symlinks(true);
wp.resolve.symlinks(true);

wp.output
    .library([ 'pyro', '[name]' ] as any)
    .libraryTarget('window')
    .filename('js/[name].js')
    .chunkFilename('js/[name].chunk.[id].js')

rules.css(wp);
rules.scss(wp);
rules.stylus(wp);
rules.images(wp);
rules.fonts(wp);
rules.vue(wp);
rules.pug(wp);
export const ruleReplaceStyleLoader = (rule: string | Rule, options: any = {}, loader: string = MiniCssExtractPlugin.loader) => {
    if ( typeof rule === 'string' ) {
        rule = wp.module.rule(rule);
    }
    rule.use('style-loader').loader(loader).options(options)
}
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
        removeComments: wp.isProd,
    },
})
rules.typescriptImport(wp, [
    rules.typescriptImportPresets.lodash,
    {
        libraryName            : 'element-ui',
        libraryDirectory       : 'lib',
        camel2DashComponentName: true,

        style: (path: string) => {
            process.stderr.write('element ui style path: ' + path);
            let out = join('node_modules', 'element-theme-scss', 'src', `${camel2Dash(basename(path, '.js'))}.scss`);
            process.stderr.write('element ui out: ' + out)
            return out;
        },
    },
])
plugins.friendlyErrors(wp);
plugins.bar(wp);
plugins.bundleAnalyzer(wp, {
    reportFilename: resolve(__dirname, 'bundle-analyzer.html'),
});
plugins.vueLoader(wp);
plugins.define(wp, {
    DEV          : wp.isDev,
    PROD         : wp.isProd,
    HOT          : wp.isHot,
    ENV          : process.env.NODE_ENV,
    'process.env': {
        NODE_ENV: `"#{process.env.NODE_ENV}"`,
    },
})

// rules.expose(wp, 'inversify')
// rules.expose(wp, 'tapable')
// rules.expose(wp, `lodash`)
rules.expose(wp, { name: 'reflect-metadata', as: 'reflect_metadata' })

wp.resolve.alias.merge({
    'jquery$'                            : 'jquery/src/jquery',
    'quasar$'                            : 'quasar/dist/quasar.esm.js',
    'babel-core$'                        : '@babel/core',
    'select2$'                           : wp.isProd ? 'select2/dist/js/select2.min.js' : 'select2/dist/js/select2.full.js',
    './../utilities'                     : addonSrcPath('admin-theme', 'vendor/utilities.js'),
    '@c'                                 : addonSrcPath('admin-theme', 'classes'),
    '@u'                                 : addonSrcPath('admin-theme', 'utils'),
    '@'                                  : addonSrcPath('admin-theme', ''),
    '#'                                  : addonSrcPath('admin-theme', 'components'),
    'node_modules/element-theme-scss/lib': resolve(__dirname, 'packages/element-ui-theme/lib'),
    'node_modules/element-theme-scss/src': resolve(__dirname, 'packages/element-ui-theme/src'),
});

wp.externals({
    'jquery'                : 'jQuery',
    'vue'                   : 'Vue',
    'vue-class-component'   : 'VueClassComponent',
    'vue-property-decorator': 'vue-property-decorator',
    'bootstrap'             : 'jQuery',
    '@pyro/admin'           : [ 'pyro', 'admin' ],
    '@pyro/core'            : [ 'pyro', 'core' ],
    '@pyro/menus'           : [ 'pyro', 'menus' ],
    '@pyro/clients'         : [ 'pyro', 'clients' ],
    '@pyro/select2'         : [ 'pyro', 'select2' ],
    // 'quasar'                : 'Quasar'
})

JsonPlugin.webpackJson.filePath = resolve(__dirname, 'config', 'webpack.json');
JsonPlugin.webpackJson.ensureRemoved()


// let outputPath= (...parts) => resolve(__dirname, '.tmp/out/addons/shared/pyro', ...parts);
export function createConfig(cb: (config: Configuration) => any): Configuration {
    let config: Configuration = wp.toConfig() as any;
    if ( config.bail ) {
        return config;
    }
    config.output.publicPath = '/'
    cb(config);
    return config;
}


export function createCompilerConfig(name: string, dirName: string): Configuration {
    let entryFileName = `${name}.${process.env.NODE_ENV}.ts`
    return createConfig((config) => {
        config.entry                = {
            [ name ]: addonSrcPath(dirName, `${name}.development.ts`),
        }
        config.output.library       = [ 'pyro', name ];
        config.output.path          = outputPath(dirName, 'resources')
        config.output.filename      = 'js/[name].js'
        config.output.chunkFilename = 'js/[name].chunk.[id].js'
        config.plugins.push(new MiniCssExtractPlugin({
            filename     : 'css/[name].css',
            chunkFilename: 'css/[name].[id].css',
        }))
    })
}
