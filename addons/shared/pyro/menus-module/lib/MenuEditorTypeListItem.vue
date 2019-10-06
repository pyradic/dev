<template>
    <li class="nav-item">
        <a
                href="javascript: void(0);"
                @click="onClick"
                :data-link-type="namespace"
                class="nav-link link-type-option"
        >
            <strong>{{ title }}</strong>
            <br>
            <small>{{ description }}</small>
        </a>
    </li>
</template>
<script lang="ts">
    import Vue from 'vue'
    import { component } from '@pyro/platform';

    @component({ props: [ 'namespace', 'title', 'description' ] })
    export default class MenuEditorTypeListItem extends Vue {
        onClick(event: MouseEvent){
            this.$emit('click', event)
        }
    }
</script>