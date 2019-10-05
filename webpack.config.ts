// noinspection ES6UnusedImports
import { blocks,helpers, plugins } from '@radic/webpacker';
// noinspection ES6UnusedImports
import { Addon, AddonFinder, setupWebpacker } from './utils'
// noinspection ES6UnusedImports
import { resolve } from 'path';
import { Configuration } from 'webpack';

Error.stackTraceLimit = Infinity;


const wp                          = setupWebpacker(__dirname);
const mode: Configuration['mode'] = wp.store.get('mode');
wp.ensureLink(
    'packages/element-ui-theme',
    'node_modules/element-ui-theme'
);
wp.ensureLink(
    'core/pyrocms/accelerant-theme',
    'node_modules/accelerant-theme'
);
wp.entry('platform').add(resolve(__dirname, `packages/pyradic/platform/lib/platform.${mode}.ts`));

helpers.speedMeasure(wp, {

})

const finder = AddonFinder.make([
    'addons/shared/*/*/package.json',
    'addons/*/*/package.json'
])
const addons = finder.find();
for ( const addon of addons ) {
    addon.add(wp)
}

function getServerConfig(): Configuration {
    wp.devtool('#source-map');
    wp.mode('development')

    wp.module.rules.delete('source-map-loader');

    helpers.setServerLocation(wp, 'http', 'pyradic.local', 8079);
    helpers.devServer(wp)
    wp.devServer
        .overlay(true)
        .clientLogLevel('debug' as any)
        .compress(true)
        .inline(true)

        .hot(true);

    plugins.json(wp, {
        filePath: resolve(__dirname, 'config', 'webpack.json')
    })

    return wp.toConfig();
}

let config;
if ( wp.isHot ) {
    config = getServerConfig()
} else {
    config = wp.toConfig()
}


export default config;