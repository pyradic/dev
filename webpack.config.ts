///<reference path="globals.d.ts"/>

Error.stackTraceLimit = Infinity;

import { blocks, plugins } from '@radic/webpacker';
import { Addon, AddonFinder, getTemplatedPathOptions, setupWebpacker } from './utils'
import { resolve } from 'path';
import { Configuration } from 'webpack';

const EXPORT_NAMESPACE            = 'pyro';
const wp                          = setupWebpacker(__dirname);
const mode: Configuration['mode'] = wp.store.get('mode');

// helpers.speedMeasure(wp, {})

wp.ensureLink('packages/element-ui-theme', 'node_modules/element-ui-theme');
wp.ensureLink('core/pyrocms/accelerant-theme', 'node_modules/accelerant-theme'); // allows us to use @import "~accelerant-theme/.." in our SCSS

wp.output.library([ EXPORT_NAMESPACE, '[addon:entryName]' ] as any)

// add all addon module entry points
const finder        = AddonFinder.make([
    'packages/pyro/platform/package.json',
    'addons/shared/*/*/package.json',
    'addons/*/*/package.json'
])
let addons: Addon[] = finder.find();

for ( const addon of addons ) {
    // addon.add(wp)
    wp.externals({
        ...wp.get('externals'),
        [ addon.name ]: [ EXPORT_NAMESPACE, addon.entryName ]
    });
    // let p =addon.getRPath('resources')
    // wp.resolve.alias.set(addon.name + '$', addon.entry.development)
    // wp.resolve.alias.set(addon.name + '/' + addon.pkg.pyro.srcPath, addon.srcPath)
    // wp.entry(addon.lastNameSnake).add(wp.isDev ? addon.entry.development : addon.entry.production);
    wp.entry(addon.entryName).add(addon.entry.development);
}

wp.blocks.plugins.extraTemplatedPaths(wp, getTemplatedPathOptions(addons));

// Configures and prepares webpack for webpack-dev-server (with HMR)
function getServerConfig(): Configuration {
    wp.devtool('#source-map');
    wp.mode('development')

    // addons.forEach(addon => wp.resolve.alias.set(addon.name, addon.entry.development))

    wp.module.rules.delete('source-map-loader');
    wp.stats(false)
    blocks.helpers.setServerLocation(
        wp,
        process.env.WEBPACK_PROTOCOL as any || 'http',
        process.env.WEBPACK_HOST || 'localhost',
        process.env.WEBPACK_PORT as any || 8179
    );

    blocks.helpers.devServer(wp)

    plugins.json(wp, {
        filePath: resolve(__dirname, 'config', 'webpack.json')
    })

    wp.devServer
        .contentBase(__dirname + '/public')
        .overlay(true)
    // .color(true)
    // .progress(true)
    // .useLocalIp(true)
    // .host(process.env.WEBPACK_HOST || 'localhost')

    return wp.toConfig() as any
}


// Configures and prepares webpack for webpack cli builder (both dev and prod)
function getBuilderConfig(): Configuration {

    wp.devtool('#source-map');

    wp.output
        .filename('js/[name].js')
        .path(__dirname + '/public/assets')
        .chunkFilename('js/[name].chunk.[id].js');

    if ( wp.isProd ) {
        wp.settings.sourceMap = false;
        wp.devtool(false)
        wp.mode('production');
        wp.optimization.minimize(true)

        blocks.helpers.minimizer(wp, {})
        blocks.helpers.replaceStyleLoader(wp, 'css')
        blocks.helpers.replaceStyleLoader(wp, 'scss')
        blocks.plugins.miniCssExtract(wp, {
            filename     : 'css/[name].css',
            // filename     : <any>(()=>{
            //     return '[name].css'
            // }),
            chunkFilename: 'css/[name].chunk.[id].css'
        })

        plugins.loaderOptions(wp, {
            minimize: true
        })
        // helpers.minimizer(wp)
    }

    // wp.optimization.splitChunks({
    //
    // })
    // wp.output.chunkFilename('public/vendor/chunks/[name].js')

    wp.extendConfig(config => {
        config.optimization = {
            namedChunks : true,
            namedModules: true,
            chunkIds    : 'named',
            moduleIds   : 'named',
            minimize    : false,
            splitChunks : {
                cacheGroups: {
                    vendors: {
                        name: 'vendors',
                        test: /[\\/]node_modules[\\/](inversify|reflect-metadata|core-js|axios|tapable|util|lodash|element-ui|tslib|process|debug)/,
                        enforce:true,
                        chunks:'initial'
                    }
                }
            }
        }
        return config;
    })
    // wp.extendConfig(config => {
    //     config.optimization              = config.optimization || {}
    //     config.optimization.runtimeChunk = 'multiple';
    //     config.optimization.splitChunks  = {
    //         chunks            : 'all',
    //         maxInitialRequests: Infinity,
    //         minSize           : 0,
    //         minChunks         : 2
    //         // cacheGroups       : {
    //         //     vendor: {
    //         //         test: /[\\/]node_modules[\\/]/,
    //         //         name(module) {
    //         //             // get the name. E.g. node_modules/packageName/not/this/part.js
    //         //             // or node_modules/packageName
    //         //             const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[ 1 ];
    //         //
    //         //             // npm package names are URL-safe, but some servers don't like @ symbols
    //         //             return `npm.${packageName.replace('@', '')}`;
    //         //         }
    //         //     }
    //         // }
    //     }
    //     return config;
    // })

    return wp.toConfig() as any
}


let config;
if ( wp.isServer ) {
    config = getServerConfig()
} else {
    config = getBuilderConfig()
}


export default config;