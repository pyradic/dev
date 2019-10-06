import Vue from 'vue';
import { Application } from '@pyro/platform';
import PermissionTree from './PermissionTree.vue';

const log = require('debug')('install');

export {Ex2VuePlugin}

export default class Ex2VuePlugin {
    static __installed = false
    static install(_Vue: typeof Vue, opts: any = {}) {
        log('install', { _Vue, opts });
        if ( this.__installed ) { return; }
        this.__installed = true;
        const app = Application.instance;
        app.hooks.install.call(_Vue, opts);

        _Vue.component(PermissionTree.name, PermissionTree);

        log('install', { _Vue, opts });

        app.hooks.installed.call(_Vue, opts);
    }
}