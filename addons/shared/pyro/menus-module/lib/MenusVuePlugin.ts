import Vue from 'vue'
import '@pyro/platform'
import MenuEditor from './MenuEditor.vue'
import MenuEditorTypeListItem from './MenuEditorTypeListItem.vue'

export { MenusVuePlugin }
export default class MenusVuePlugin {
    private static __installed = false

    public static install(_Vue: typeof Vue, opts: any = {}) {
        if ( this.__installed ) {
            return;
        }
        this.__installed = true

        _Vue.component('p-menu-editor', MenuEditor)
        _Vue.component('p-menu-editor-type-list-item', MenuEditorTypeListItem)
    }
}