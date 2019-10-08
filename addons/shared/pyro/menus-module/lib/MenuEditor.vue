<style lang="scss" scoped>
    .p-menu-editor {
    }
</style>
<style lang="scss">
    .py-me {
        &__tree {
            > .container-fluid {
                margin: 0;
                width: 100%;
            }

            .tree .card {
                > a {
                    font-size: 12px;
                    font-family: monospace;
                }

                > .buttons {
                    margin: 2px 0;

                    .btn {
                        border-radius: 0;
                    }
                }
            }

            ul.tree .card:hover > .buttons {
                display: flex;
            }

            ul.tree .card:hover &-item-tag {
                display: none;
            }
        }

        &__tree-item-tag {
            padding: 4px 0 0;
            float: right;
            position: absolute;
            right: 5px;

            .tag {
                text-shadow: 1px 1px 0px #3d3d3de3;
                height: 17px;
                border-radius: 0;
            }

            small,
            .small {
                font-size: 11px;
                padding: 3px 10px;
                text-transform: uppercase;
            }

            .info-tag {
                font-weight: normal;
                font-size: 9px;
                padding: 5px;
            }
        }

        &__side {

            transition: all .3s ease;
        }
    }

    @media (min-width: 992px) {
        body.display--compact {
            .py-me {
                &__tree {
                    ul.tree .card {
                        > a {
                            font-size: 10px
                        }
                    }
                }
            }
        }
    }

    .py-me--scrollable {
        .py-me {
            &__tree {
                max-height: calc(80vh);
                overflow: hidden;
                overflow-y: scroll;
            }
        }
    }

    .py-me--compact {
        .py-me {
            &__tree {
                .tree li ul {
                    padding-inline-start: 24px;
                }

                .tree .card {
                    font-size: 12px !important;
                    margin-bottom: 1px;
                    border: 0;
                    border-radius: 0;

                    > .handle {
                        padding: 5px 7px;
                    }

                    > .buttons {
                        margin: 3px 0;

                        .btn.btn-xs {
                            padding: 0.15rem 0.3333333333rem;
                        }
                    }
                }
            }

            &__tree-item-tag {
                padding: 2px 0 0;
            }
        }
    }

</style>

<template>
    <el-container :class="classes">
        <el-container class="py-me__tree" ref="tree">
            <slot name="tree"></slot>
        </el-container>
        <el-aside :width="sideWidth" class="py-me__side" ref="side">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title" v-if="side.content === 'form' && form.mode === 'create'">Create</h5>
                    <h5 class="card-title" v-else-if="side.content === 'form' && form.mode === 'edit'">Edit</h5>
                    <h5 class="card-title" v-else>Add item</h5>
                </div>
                <div class="card-block card-body">
                    <template v-if="side.content === 'form'">
                        <py-menu-editor-form
                                v-if="side.content === 'form'"
                                :mode="form.mode"
                                :slug="form.slug"
                                :id="form.id"
                                @cancel="onFormCancel"
                                @success="onFormSuccess"
                                @error="onFormError"
                        ></py-menu-editor-form>
                    </template>
                    <template v-else>
                        <ul class="nav nav-pills nav-stacked">
                            <slot name="type_list">
                                <li class="nav-item" v-for="(type, typeIndex) in types">
                                    <a
                                            href="javascript: void(0);"
                                            @click="onListItemClick(type.slug)"
                                            :data-link-type="type.namespace"
                                            class="nav-link link-type-option"
                                    >
                                        <strong>{{ type.title }}</strong>
                                        <br>
                                        <small>{{ type.description }}</small>
                                    </a>
                                </li>
                            </slot>
                        </ul>
                    </template>
                </div>
            </div>
        </el-aside>
        <el-dialog title="Add Item" :visible.sync="showChooseChildType">
            <ul class="nav nav-pills nav-stacked">
                <li class="nav-item" v-for="(type, typeIndex) in types">
                    <a href="javascript: void(0);" class="nav-link link-type-option" @click="chooseChildType(type.slug, chooseChildTypeId)">
                        <strong>{{ type.title }}</strong>
                        <br>
                        <small>{{ type.description }}</small>
                    </a>
                </li>
            </ul>
        </el-dialog>
    </el-container>
</template>

<script lang="ts">
    import $ from 'jquery'
    import { Component, component, prop } from '@pyro/platform';
    import { Aside as ElAside, Container as ElContainer, Dialog as ElDialog, Main as ElMain, Notification } from 'element-ui'
    import { MenuType } from './interfaces';

    function applySortable() {
        // require('')
    }

    export interface MenuEditorHideables {
        tree: boolean
        form: boolean
        side: boolean
    }

    interface IMenuEditorSide {
        expanded: boolean
        content: 'list' | 'form'
    }

    interface IMenuEditorForm {
        mode: 'create' | 'edit'
        slug: string
        id?: number
    }

    @component({ components: { ElContainer, ElAside, ElMain, ElDialog } })
    export default class MenuEditor extends Component {
        $refs: { side: ElAside, tree: ElContainer }
        @prop.classPrefix('me') classPrefix: string
        @prop.boolean() compact: boolean
        @prop.boolean() scrollable: boolean

        types: MenuType[]            = []
        urls: Record<string, string> = {}
        expanded                     = false;
        expandPercentage             = 70;
        collapsedPercentage          = 25;

        side: IMenuEditorSide = {
            expanded: false,
            content : 'list'
        }
        form: IMenuEditorForm = {
            mode: 'create',
            slug: null,
            id  : null
        }
        showChooseChildType   = false
        chooseChildTypeId     = null

        get sideWidth() {
            return this.side.expanded ? (this.expandPercentage + '%') : (this.collapsedPercentage + '%')
        }

        get tree(): ElContainer {return this.$refs.tree}

        get $tree(): JQuery<Element> {return $(this.tree.$el) }

        get classes() {
            return {
                [ this.classPrefix ]                 : true,
                [ `${this.classPrefix}--compact` ]   : this.compact,
                [ `${this.classPrefix}--scrollable` ]: this.scrollable,
                [ `${this.classPrefix}--expanded` ]  : this.expanded
            }
        }

        created() {
            window[ '$menu' ] = this;
            this.types        = Object.values(this.$py.data.get('pyro.menus.types'))
            this.urls         = this.$py.data.get('pyro.menus.urls')
        }

        mounted() {
            this.reloadTree(false).then(() => this.bindTree())
        }

        expand() {
            this.side.expanded = true;
            return this;
        }

        collapse() {
            this.side.expanded = false;
            return this;
        }

        showList() {
            this.side.content  = 'list'
            this.side.expanded = false
            return this;
        }

        showForm(mode: IMenuEditorForm['mode'], slug: string, id?: number) {
            this.form.mode     = mode;
            this.form.slug     = slug;
            this.form.id       = id;
            this.side.expanded = true;
            this.side.content  = 'form';
            return this;
        }


        onListItemClick(type:MenuType) {
            this.$log('onListItemClick',type)
            this.showForm('create', type.slug)
        }

        onTreeitemClick(slug, id) {
            this.showForm('edit', slug, id)
        }

        onFormCancel(...args) {
            this.$log('onFormCancel', { args })
            this.showList()
        }

        onFormSuccess(...args) {
            this.$log('onFormSuccess', { args })
            this.showList()
            this.reloadTree()
        }

        onFormError(...args) {
            this.$log('onFormError', { args })
            this.showList()
        }


        async reloadTree(useBlockUI: boolean = true) {
            if ( useBlockUI ) {
                this.$tree.block({})
            }
            const response = await this.$http.get(this.urls.tree)
            this.$tree.html(response.data);
            if ( useBlockUI ) {
                this.$tree.unblock({})
            }
            this.bindTree()
        }

        bindTree() {
            const $links       = this.$tree.find('li > .card > a')
            const $buttons     = this.$tree.find('li > .card > .buttons')
            const $buttonLinks = this.$tree.find('li > .card > .buttons > a')
            const $adds        = $buttons.find('a[data-action="add"]')
            const $views       = $buttons.find('a[data-action="view"]')
            const $deletes     = $buttons.find('a[data-action="delete"]')
            const self         = this;
            this.$log('bindTree', { $links, $buttons, $adds, $views, $deletes, self })
            $buttonLinks.not('[data-action="view"]').on('click', function (event) {
                event.preventDefault();
                event.stopPropagation();
                const $el    = $(this);
                const action = $el.data('action');
                const id     = parseInt($el.data('id'));
                if ( action === 'add' ) {
                    return self.onCreateChildClick(id);
                }
                if ( action === 'delete' ) {
                    return self.deleteItem(id)
                }
            });
            $links.on('click', function (event) {
                event.preventDefault();
                event.stopPropagation();
                const $el  = $(this);
                // const type = self.types[ $el.data('type') ];
                const id   = parseInt($el.closest('li').data('id'));
                let {type} = $el.data();
                self.$log('$links click', {$el,type,id,data:$el.data()});
                self.onTreeitemClick(type, id)
            });
        }

        async onCreateChildClick(id) {
            this.chooseChildTypeId   = id;
            this.showChooseChildType = true;
        }

        async chooseChildType(slug, id) {
            this.showForm('create', slug, id);
            this.showChooseChildType = false;
            this.chooseChildTypeId   = null;
        }

        async deleteItem(id) {
            debugger
            const response = await this.$py.http.post(this.urls.delete + '/' + id);
            if ( response.status !== 200 ) {
                return Notification.error(response.statusText);
            }
            Notification.success('Link deleted')
            this.reloadTree(true);
        }
    }
</script>