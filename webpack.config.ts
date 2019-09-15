import { Configuration } from 'webpack';
import { resolve } from 'path';
import { addonSrcPath, createCompilerConfig, ensureLink,  ruleReplaceStyleLoader, wp } from './webpack.base'
import { helpers, plugins } from '@radic/webpacker'

export function getServerConfig() {
    wp.devtool('#source-map');
    wp.mode('development')

    wp.module.rules.delete('source-map-loader');

    helpers.setServerLocation(wp, 'http', 'pyradic.local', 8179);
    helpers.devServer(wp)
    wp.devServer
        .overlay(true)
        .clientLogLevel('debug' as any)
        .compress(true)
        .inline(true)

        .hot(true);

    plugins.json(wp, {
        filePath: resolve(__dirname, 'config', 'webpack.json'),
    })


    let config: Configuration = wp.toConfig();
    config.entry              = {
        [ 'admin' ]     : addonSrcPath('admin-theme', `admin.${process.env.NODE_ENV}.ts`),
    };

    // config.devServer.writeToDisk=true;
    return config;
}

export function getBuilderConfig() {

    wp.settings.sourceMap = true;
    wp.devtool('#source-map')

    if ( wp.isProd ) {
        wp
            .mode('production')
            .optimization.minimize(false)
        plugins.loaderOptions(wp, {
            minimize: false,
        })
        // helpers.minimizer(wp)
    }

    ruleReplaceStyleLoader('scss', { publicPath: '/' });
    ruleReplaceStyleLoader('stylus', { publicPath: '/' });
    wp.plugins.delete('miniCssExtract')


    let config: Configuration | Configuration[]
    if ( wp.toConfig().bail ) {
        config = wp.toConfig()
    } else {

        // let adminThemeConfig                     = createCompilerConfig('admin', 'admin-theme');
        // adminThemeConfig.entry[ 'admin' ]        = [
        //     adminThemeConfig.entry[ 'admin' ],
        // ];
        // adminThemeConfig.entry[ 'font-awesome' ] = addonSrcPath('admin-theme', 'styling/font-awesome.scss');
        // adminThemeConfig.entry[ 'bootstrap' ]    = addonSrcPath('admin-theme', 'styling/accelerant-bootstrap.scss');
        let configs: Configuration[] = [
            createCompilerConfig('admin', 'admin-theme')
        ]

        config = configs
    }

    return config;
}


let config;
if ( wp.isHot ) {
    config = getServerConfig();
} else {
    config = getBuilderConfig();
}

export default config;


