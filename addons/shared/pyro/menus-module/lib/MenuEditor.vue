<style lang="scss" scoped>
    .p-menu-editor {
    }
</style>
<style lang="scss">
    .p-menu-editor {
        > .tree {
            > .container-fluid {
                margin: 0;
                width: 100%;
            }
        }
    }
</style>

<template>
    <el-container class="p-menu-editor">
        <el-container class="tree">
            <slot name="tree"></slot>
        </el-container>
        <el-aside width="25%" class="side">
            <div class="card">
                <ul class="nav nav-pills nav-stacked">
                    <slot name="type_list">
                    <li class="nav-item" v-for="(type, typeIndex) in types">
                        <a
                                href="javascript: void(0);"
                                @click="handleMenuTypeClick(type)"
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
            </div>
        </el-aside>
    </el-container>
</template>

<script lang="ts" src="./MenuEditor.ts"></script>