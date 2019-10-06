Error.stackTraceLimit = Infinity;

import { blocks, plugins } from '@radic/webpacker';
import { Addon, AddonFinder, setupWebpacker } from './utils'
import { resolve } from 'path';
import { Configuration } from 'webpack';


const wp                          = setupWebpacker(__dirname);
const mode: Configuration['mode'] = wp.store.get('mode');

// helpers.speedMeasure(wp, {})

wp.ensureLink('packages/element-ui-theme', 'node_modules/element-ui-theme');
wp.ensureLink('core/pyrocms/accelerant-theme', 'node_modules/accelerant-theme'); // allows us to use @import "~accelerant-theme/.." in our SCSS

// add platform core module entry point
wp.entry('platform').add(resolve(__dirname, `packages/pyradic/platform/lib/platform.${mode}.ts`));
// make it available to other addons
wp.externals({
    ...wp.get('externals'),
    '@pyro/platform': ['pyro', 'platform']
})


// add all addon module entry points
const finder          = AddonFinder.make([
    'addons/shared/*/*/package.json',
    'addons/*/*/package.json'
])
const addons: Addon[] = finder.find();
for ( const addon of addons ) {
    addon.add(wp)
}

// Configures and prepares webpack for webpack-dev-server (with HMR)
function getServerConfig(): Configuration {
    wp.devtool('#source-map');
    wp.mode('development')

    wp.module.rules.delete('source-map-loader');

    blocks.helpers.setServerLocation(
        wp,
        process.env.WEBPACK_PROTOCOL as any || 'http',
        process.env.WEBPACK_HOST || 'localhost',
        process.env.WEBPACK_PORT as any || 8079
    );

    blocks.helpers.devServer(wp)

    plugins.json(wp, {
        filePath: resolve(__dirname, 'config', 'webpack.json')
    })

    return wp.toConfig();
}

// Configures and prepares webpack for webpack cli builder (both dev and prod)
function getBuilderConfig():Configuration{
    return wp.toConfig()
}

let config;
if ( wp.isHot ) {
    config = getServerConfig()
} else {
    config = getBuilderConfig()
}


export default config;