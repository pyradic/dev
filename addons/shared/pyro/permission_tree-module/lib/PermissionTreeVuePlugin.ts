import Vue from 'vue';
import { Application, prefixAndRegisterComponents } from '@pyro/platform';
import PermissionTree from './PermissionTree.vue';

const log = require('debug')('install');

export { PermissionTreeVuePlugin }

export default class PermissionTreeVuePlugin {
    static __installed = false

    static install(_Vue: typeof Vue, opts: any = {}) {
        if ( this.__installed ) { return; }
        this.__installed = true;

        log('install', { _Vue, opts });
        const app        = Application.instance;
        app.hooks.install.call(_Vue, opts);

        prefixAndRegisterComponents(_Vue, {
            [ PermissionTree.name ]: PermissionTree
        })

        log('installed', { _Vue, opts });
        app.hooks.installed.call(_Vue, opts);
    }
}