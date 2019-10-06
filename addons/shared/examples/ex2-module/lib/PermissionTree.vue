<style lang="scss" scoped>
    .permissions {

    }

    .controls {
        background: rgba(0, 0, 0, 0.1);
    }

    .control {

    }


</style>
<style lang="scss">
    .permissions {

        label {
            margin-bottom: 0; // reset 0.5rem by bootstrap reboot
        }

        .permission-tree {
            .text-addon {
                color: #0b2e13;
                font-size: 12px;
                font-weight: bold;
            }

            .text-stream {
                /*color: #0098ca;*/
                font-size: 12px;
                font-weight: bold;
            }

            .text-permission {

                font-size: 12px;
            }
        }

        .permission-tree--compact {
            .addon-child-texts {
                font-size: 12px;
            }

            .text-stream {
                color: #0098ca;
                font-size: 11px;
                min-width: 100px;
                background: #bfe0ff;
                padding: 2px 10px 2px 5px;
                display: inline-block;
                text-align: right;
                font-weight: initial;
            }

            .text-permission {
                font-size: 13px;
                padding: 2px 10px;
            }
        }
    }
</style>
<template>
    <div class="card permissions">
        <input type="hidden" ref="input"></input>
        <div class="card-header">
            <h5 class="card-title">Permissions</h5>
        </div>
        <ul class="list-group list-group-flush controls">
            <li class="list-group-item">
                <el-button class="control" size="mini" @click="switchDataViewType">Switch to {{ dataViewType === 'expanded' ? 'compact' : 'normal' }} view</el-button>
                <el-button class="control" size="mini" @click="expandAll">Expand all</el-button>
                <el-button class="control" size="mini" @click="collapseAll">Collapse all</el-button>
            </li>
        </ul>
        <div class="card-block card-body">
            <el-tree ref="tree"
                     :class="classes"
                     :data="dataViewType === 'expanded' ? dataExpanded : dataCompact"
                     show-checkbox
                     :default-expand-all="defaultExpandAll"
                     node-key="key"
                     :check-on-click-node="false"
                     auto-expand-parent
                     @check="handleCheck"
                     @node-click="handleNodeClick"
                     @check-change="handleCheckChange"
                     :expand-on-click-node="false"
                     :render-content="renderNodeContent"
                     :default-checked-keys="defaultEnabledKeys"
                     highlight-current
                     :props="defaultProps">
            </el-tree>
        </div>
    </div>
</template>
<script lang="ts">

    import Vue, { CreateElement } from 'vue';
    import { app, component } from '@pyro/platform';
    import { Button, Checkbox, Col, Icon, Input, Row, Tree } from 'element-ui';
    import { AddonPermission, AddonPermissions } from './interfaces';
    import { TreeData, TreeNode } from 'element-ui/types/tree';

    export interface Data extends TreeData, AddonPermission.Stream, AddonPermission.Stream.Permission {
        type: string
        stream?: AddonPermission.Stream
    }

    export interface OriginalCheckbox {
        name: string,
        value: string,
        checked: boolean,
        el: HTMLInputElement
    }

    export type OriginalCheckboxes = OriginalCheckbox[];

    const log = require('debug')('PermissionComponent')

    export type PermissionTreeViewType = 'compact' | 'expanded';
    @component({
        components: {
            'ElTree'    : Tree,
            'ElCheckbox': Checkbox,
            'ElButton'  : Button,
            'ElInput'   : Input,
            'ElIcon'    : Icon,
            'ElRow'     : Row,
            'ElCol'     : Col
        }
    })
    export default class PermissionTree extends Vue {
        name                                 = 'permission-tree'
        $refs: { tree: Tree, input: HTMLInputElement }
        dataCompact: any                     = [];
        dataExpanded: any                    = []
        dataViewType: PermissionTreeViewType = 'compact'
        defaultExpandAll: boolean            = true;
        defaultProps                         = {
            children: 'children',
            label   : 'label',
            disabled: 'disabled'
        }
        defaultEnabledKeys                   = []
        permissions: Record<string, AddonPermission.Stream.Permission>
        originalCheckboxes: OriginalCheckboxes

        get tree(): Tree {return this.$refs.tree}

        get classes() {
            return {
                'permission-tree'         : true,
                'permission-tree--compact': this.isCompact
            }
        }


        get isCompact() {return this.dataViewType === 'compact'}

        created() {
            window[ '$tree' ] = this
            this.permissions  = {}
            this.setDataFromPermissions(app().get<AddonPermissions>('ex2.permissions'));
            this.dataViewType     = this.$py.storage.get('ex2.permissions.dataViewType', 'compact');
            this.defaultExpandAll = this.$py.storage.get('ex2.permissions.defaultExpandAll', true);
        }

        mounted() {
            this.originalCheckboxes = this.findOriginalCheckboxes()
        }

        findOriginalCheckboxes(): OriginalCheckboxes {
            let inputs = Array.from(this.$refs.input.form) as HTMLInputElement[];

            return inputs
                .filter(el => el.type === 'checkbox' && el.classList.contains('el-checkbox__original') === false)
                .map(el => ({ name: el.name, value: el.value, checked: el.checked, el }))
        }

        handleCheck(data:Data, other){
            log('handleCheck', {  data, other })
            // const node = this.tree.getNode(data.key) as any
            // this.handleNodeClick(data, node, this.tree);
        }
        handleNodeClick(data: Data, node: TreeNode<any, Data>, component: Tree) {
            log('handleNodeClick', { data, node, component })
            if ( data.type === 'permission' ) {
                let checked = !node.checked
                this.tree.setChecked(data as any, checked,true)
            } else if ( data.type === 'addon' ) {
                node.expanded = !node.expanded
            } else if ( data.type === 'stream' && this.isCompact === false ) {
                node.expanded = !node.expanded
            }
            // this.tree.store._getAllNodes().filter(node => node.expanded).map(node => node.key)
        }

        handleCheckChange(data: Data, checked) {
            if ( data.type === 'permission' ) {
                log('handleCheckChange', { data, checked, me: this })
                this.permissions[ data.key ].enabled = checked
                this.defaultEnabledKeys              = this.getEnabledPermissions().map((p: any) => p.key)
                this.updateOriginalCheckboxByNode(data, checked);
            }
        }

        updateOriginalCheckboxByNode(data:Data, checked) {
            let name             = data.stream.field + '[]';
            let value            = data.key;
            let originalCheckbox = this.originalCheckboxes.find(c => c.name === name && c.value === value);
            if ( !originalCheckbox ) {
                return console.warn(`Original checkbox not found for ${name} / ${value}`)
            }
            originalCheckbox.checked = checked
            if ( checked !== originalCheckbox.el.checked ) {
                originalCheckbox.el.click()
                log('originalCheckbox updated', { data, name, value, originalCheckbox })
            }
        }

        getEnabledPermissions() {
            return Object.values(this.permissions).filter((p: any) => p.enabled)
        }

        renderNodeContent(h: CreateElement, { node, data, store }: { node: TreeNode<any, TreeData>, data: Data, store: any }) {
            // log('renderNodeContent', { node, data, store })
            let compact = this.dataViewType === 'compact';
            if ( data.type === 'addon' ) {
                return h('span', { class: 'text-addon' }, data.label)
            } else if ( data.type === 'stream' ) {
                return h('span', { class: 'text-stream' }, data.label)
            } else if ( data.type === 'permission' ) {
                if ( compact ) {
                    return h('span', { class: 'addon-child-texts' }, [
                        h('span', { class: 'text-stream' }, data.stream.label),
                        h('span', { class: 'text-permission' }, data.label)
                    ])
                }
                return h('span', { class: 'text-permission' }, data.label)
            }
        }

        expandAll() {
            this.$py.storage.set('ex2.permissions.defaultExpandAll', true)
            this.tree.store._getAllNodes().forEach(node => node.expanded = true)
        }

        collapseAll() {
            this.$py.storage.set('ex2.permissions.defaultExpandAll', false)
            this.tree.store._getAllNodes().forEach(node => node.expanded = false)
        }

        switchDataViewType(event?: MouseEvent) {
            let dataViewType: PermissionTreeViewType = this.dataViewType === 'expanded' ? 'compact' : 'expanded';
            log('switchDataViewType', 'from:', this.dataViewType, '  to', dataViewType)
            this.dataViewType = dataViewType;
            this.$py.storage.set('ex2.permissions.dataViewType', dataViewType)
            if ( event ) {
                let el = event.target as HTMLButtonElement
                el.blur();
            }
        }

        setDataFromPermissions(permissions: AddonPermissions) {
            Object.entries(permissions).forEach(([ addonKey, addon ]) => {

                let type                = 'addon'
                const dataAddonExpanded = { key: addon.key, label: addon.label, type, children: [] }
                const dataAddonCompact  = { key: addon.key, label: addon.label, type, children: [] }
                this.dataExpanded.push(dataAddonExpanded)
                this.dataCompact.push(dataAddonCompact)

                Object.entries(addon.streams).forEach(([ streamKey, stream ]) => {
                    type                     = 'stream'
                    const dataStreamExpanded = { key: stream.key, label: stream.label, field: stream.field, type, children: [] }
                    const dataStreamCompact  = { key: stream.key, label: stream.label, field: stream.field, type, children: [] }
                    dataAddonExpanded.children.push(dataStreamExpanded)

                    Object.entries(stream.permissions).forEach(([ permissionKey, permission ]) => {
                        let { key, label, field }          = stream
                        let parentStream                   = { key, label, field }
                        type                               = 'permission'
                        this.permissions[ permission.key ] = permission
                        if ( permission.enabled ) {
                            this.defaultEnabledKeys.push(permission.key)
                        }
                        dataStreamExpanded.children.push({ key: permission.key, label: permission.label, type, stream: parentStream })
                        dataAddonCompact.children.push({ key: permission.key, label: permission.label, type, stream: parentStream })
                    })
                })

            })
        }


    }
</script>