import Vue from 'vue'
import { component } from '@pyro/platform';
import { Aside, Container, Main } from 'element-ui'

@component({
    components: {
        'ElContainer': Container,
        'ElAside'    : Aside,
        'ElMain'     : Main
    }
})
export default class MenuEditor extends Vue {
    types = []

    created(){
        this.types = this.$py.app.get('pyro.menus.types')
    }


    handleMenuTypeClick(type){

    }
}