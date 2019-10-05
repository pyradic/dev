import Vue from 'vue';
import { Application } from '@pyro/platform';
import PermissionComponent from './PermissionComponent.vue';
import { Button, Checkbox, CheckboxGroup, Input, Tooltip, Transfer } from 'element-ui';
import EcGroupTransfer from './ec-group-transfer.vue';
import EcGroupTransferPanel from './ec-group-transfer-panel.vue';

const log = require('debug')('install');

let installed = false;

export function install(_Vue: typeof Vue, opts: any = {}) {
    log('install', { _Vue, opts });
    if ( installed ) { return; }
    installed = true;
    const app = Application.instance;
    app.hooks.install.call(_Vue, opts);

    _Vue.component('ec-group-transfer', EcGroupTransfer);
    _Vue.component('ec-group-transfer-panel', EcGroupTransferPanel);
    _Vue.component('p-permissions', PermissionComponent);
    _Vue.component('ElTransfer', Transfer);
    _Vue.component('ElTooltip', Tooltip);
    _Vue.component('ElCheckbox', Checkbox);
    _Vue.component('ElCheckboxGroup', CheckboxGroup);
    _Vue.component('ElButton', Button);
    _Vue.component('ElInput', Input);


    _Vue.mixin({
        computed: {
            $app(): Application {return Application.instance; },
        },
    });
    log('install', { _Vue, opts });

    app.hooks.installed.call(_Vue, opts);
}