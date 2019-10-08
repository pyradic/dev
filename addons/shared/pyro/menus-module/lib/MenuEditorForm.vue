<style lang="scss">
    .py-me__form {
    }
</style>

<template>
    <div v-if="!hide"></div>
</template>

<script lang="ts">
    import $ from 'jquery'
    import { Component, component, prop } from '@pyro/platform';
    import { MenuEditorMode, MenuType } from './interfaces';

    @component()
    export default class MenuEditorForm extends Component {
        @prop.classPrefix('me__form') classPrefix: string
        @prop.string.required() mode: 'create'|'edit'
        @prop.string.required() slug:string
        @prop.number() id: number
        @prop.number() parent: number
        @prop.boolean() hide: boolean
        urls: Record<string, string>

        get isCreate() {return this.mode === 'create'}

        get isEdit() {return this.mode === 'edit'}

        loading: boolean = false

        setLoading(loading: boolean) {
            if ( loading && !this.loading ) {
                $(this.$el).block({})
            } else if ( this.loading && !loading ) {
                $(this.$el).unblock({})
            }
            this.loading = loading;
        }

        created() {
            this.urls = this.$py.data.get('pyro.menus.urls');
            window['$menuForm'] = this;
        }

        mounted() {
            if ( this.hide ) {
                return;
            }
            if ( this.mode === 'create' ) {
                this.showCreate()
            }
            if ( this.mode === 'edit' ) {
                this.showEdit();
            }
        }

        async showCreate() {
            if(this.loading){
                return;
            }
            this.setLoading(true)
            let url = this.urls.create + '/' + this.slug;
            if(this.id){
                url += '/' + this.id;
            }
            const form = await this.$http.get(url)
            this.$log('showCreate', form, this.urls)
            $(this.$el).html(form.data);
            return this.bind()
        }

        async showEdit() {
            if(this.loading){
                return;
            }
            this.setLoading(true)
            const form = await this.$http.get(this.urls.edit + '/' + this.id)
            this.$log('showEdit', form, this.urls)
            $(this.$el).html(form.data);
            return this.bind()
        }

        async bind() {
            this.$log('bind', this);
            // if ( $(this.$$
            let $form       = $(this.$el).find('form');
            let $actions    = $form.find('.form__actions')
            let $buttons    = $form.find('.form__buttons')
            let action      = $form.attr('action')
            let method: any = $form.attr('method')
            $actions.find('.btn').remove()
            $buttons.find('.btn').remove()

            let $submit = $('<button name="action" value="save" type="submit" class="btn btn-sm btn-success"><i class="fa fa-save"></i> Save</button>')
            let $cancel = $('<button name="cancel" value="cancel" type="button" class="btn btn-sm btn-default">Cancel</button>')

            $actions.append($submit)
            $buttons.append($cancel)

            this.$log('bindForm', { $form, $actions, $buttons, action, method })
            this.setLoading(false)
            $cancel.on('click', () => {
                // this.showLinkTypes();
                // this.showTree();
                this.$emit('cancel')
            })
            $form.on('submit', async (event) => {
                event.preventDefault();
                event.stopPropagation();
                // me.block('side')
                let data: any    = {}
                const serialized = $form.serializeArray();
                serialized.forEach(item => data[ item.name ] = item.value)
                this.$emit('submit', data)
                this.$log('submitForm', { method, data, responseType: 'json', url: action, self:this })
                const response = await this.$http.request({ method, data, responseType: 'json', url: action })
                this.$log('submitForm', { response })
                // me.unblock('side')
                if ( response.status === 200 ) {
                    this.$log('onSuccess')
                    this.$emit('success', data)
                    this.$emit(`success.${this.mode}`, data)
                    // this.showLinkTypes();
                    // return me.showTree()
                } else {
                    this.$emit('error', response)
                    this.$emit(`erro.${this.mode}`, response)
                    // let errors = Object.keys(response.errors).map(key => `<li>${response.errors[ key ]}</li>`).join('\n');
                    // me._showAlert(`<ul>${errors}</ul>`)
                }
            });

        }

    }
</script>