import { ServiceProvider } from '@pyro/platform';
import * as admin from '@pyro/admin-theme'
import { debug } from 'debug';
import PermissionTreeVuePlugin from './PermissionTreeVuePlugin';
const log = debug('ex2');


export class PermissionTreeServiceProvider extends ServiceProvider {
    public register(): any | Promise<any> {
        this.app.hooks.start.tap('Ex2ServiceProvider', Vue => {
            log('hooks.start', { Vue });
            this.app.instance('ex2.permissions', PLATFORM_DATA.ex2.permissions)
            Vue.use(PermissionTreeVuePlugin)
        });
        console.log('admin',admin)
    }
}

