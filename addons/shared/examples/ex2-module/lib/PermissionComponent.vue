<template>

    <div>
        <!--        <ec-group-transfer v-model="value" :data='json' filterable @change="handleChange" :left-default-checked="['2', '3']" :right-default-checked="['4']" :button-texts="['到左边', '到右边']" :render-content='renderFunc'/>-->
        <hr>
        <br>
        <!--        <ec-group-transfer v-model="value" :data='data' filterable @change="handleChange" :left-default-checked="['2', '3']" :right-default-checked="['4']" :button-texts="['到左边', '到右边']" :render-content='renderFunc'/>-->
        <hr>
        <br>


        <ul>
            <li v-for="addon in data">
                <div>{{ addon.label }}</div>
                <ul>
                    <li v-for="stream in addon.streams">
                        <div>{{ stream.label }}</div>
                        <ul>
                            <li v-for="permission in stream.permissions">
                                {{ permission.label }}
                            </li>
                        </ul>
                    </li>

                </ul>
            </li>
        </ul>
    </div>

</template>
<script lang="ts">

    import Vue from 'vue';
    import { app, component } from '@pyro/platform';
    import { Checkbox, Input, Tooltip, Transfer } from 'element-ui';
    import EcGroupTransfer from './ec-group-transfer.vue';
    import { Permissions } from './ex2';

    const generateData2 = () => {
        const data = [];
        for ( let i = 1; i <= 15; i ++ ) {
            data.push({
                key     : i,
                label   : `备选项 ${i}`,
                disabled: i % 4 === 0,
            });
        }
        return data;
    };
    @component({
        components: {
            'EcGroupTransfer': EcGroupTransfer,
            'ElTransfer'     : Transfer,
            'ElTooltip'      : Tooltip,
            'ElCheckbox'     : Checkbox,
            'ElInput'        : Input,
        },
    })
    export default class PermissionComponent extends Vue {
        data:Permissions = [];

        mounted() {
            this.data = app().get<Permissions>('ex2.permissions');
        }

    }
</script>