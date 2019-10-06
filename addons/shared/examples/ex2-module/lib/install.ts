import Vue from 'vue';
import { Application } from '@pyro/platform';
import PermissionTree from './PermissionTree.vue';

const log = require('debug')('install');

let installed = false;

export function install(_Vue: typeof Vue, opts: any = {}) {
    log('install', { _Vue, opts });
    if ( installed ) { return; }
    installed = true;
    const app = Application.instance;
    app.hooks.install.call(_Vue, opts);

    _Vue.component(PermissionTree.name, PermissionTree);

    log('install', { _Vue, opts });

    app.hooks.installed.call(_Vue, opts);
}