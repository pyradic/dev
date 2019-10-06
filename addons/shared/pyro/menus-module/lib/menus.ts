import './menus.scss'
import { MenusServiceProvider } from './MenusServiceProvider';
import MenusVuePlugin from './MenusVuePlugin';
import Vue from 'vue';

export {
    MenusServiceProvider,
    MenusVuePlugin
}


class AA extends Vue {
    asdf(){
        this.$py.platform;
    }
}