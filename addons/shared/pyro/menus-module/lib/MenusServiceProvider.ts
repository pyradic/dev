import { ServiceProvider } from '@pyro/platform';
import MenusVuePlugin from './MenusVuePlugin';


export class MenusServiceProvider extends ServiceProvider {
    public register() {
        this.app.instance('pyro.menus.types', PLATFORM_DATA.pyro.menus.types);
        this.app.hooks.start.tap('MenusServiceProvider', Vue => {
            Vue.use(MenusVuePlugin);
        })
    }
}