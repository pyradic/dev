import Vue from "vue";
Vue.component('ElPagination', {
    props: {

        pageSize: {
            default: 10,
            type: Number,
        },
        small: {

            type: Boolean,
        },
        total: {

            type: Number,
        },
        pageCount: {

            type: Number,
        },
        pagerCount: {
            default: 7,
            type: Number,
        },
        currentPage: {
            default: 1,
            type: Number,
        },
        layout: {
            default: "prev, pager, next, jumper, ->, total",

        },
        pageSizes: {
            default: undefined,
            type: Array,
        },
        popperClass: {

            type: String,
        },
        prevText: {

            type: String,
        },
        nextText: {

            type: String,
        },
        background: {

            type: Boolean,
        },
        disabled: {

            type: Boolean,
        },
        hideOnSinglePage: {

            type: Boolean,
        }
    }
});

Vue.component('ElDialog', {
    props: {

        visible: {

            type: Boolean,
        },
        openDelay: {


        },
        closeDelay: {


        },
        zIndex: {


        },
        modal: {
            default: true,
            type: Boolean,
        },
        modalFade: {
            default: true,
            type: Boolean,
        },
        modalClass: {


        },
        modalAppendToBody: {
            default: true,
            type: Boolean,
        },
        lockScroll: {
            default: true,
            type: Boolean,
        },
        closeOnPressEscape: {
            default: true,
            type: Boolean,
        },
        closeOnClickModal: {
            default: true,
            type: Boolean,
        },
        title: {

            type: String,
        },
        appendToBody: {

            type: Boolean,
        },
        showClose: {
            default: true,
            type: Boolean,
        },
        width: {

            type: String,
        },
        fullscreen: {

            type: Boolean,
        },
        customClass: {

            type: String,
        },
        top: {
            default: "15vh",
            type: String,
        },
        beforeClose: {

            type: Function,
        },
        center: {

            type: Boolean,
        },
        destroyOnClose: {

            type: Boolean,
        }
    }
});

Vue.component('ElAutocomplete', {
    props: {

        valueKey: {
            default: "value",
            type: String,
        },
        popperClass: {

            type: String,
        },
        popperOptions: {

            type: Object,
        },
        placeholder: {

            type: String,
        },
        clearable: {

            type: Boolean,
        },
        disabled: {

            type: Boolean,
        },
        name: {

            type: String,
        },
        size: {

            type: String,
        },
        value: {

            type: String,
        },
        maxlength: {

            type: Number,
        },
        minlength: {

            type: Number,
        },
        autofocus: {

            type: Boolean,
        },
        fetchSuggestions: {

            type: Function,
        },
        triggerOnFocus: {
            default: true,
            type: Boolean,
        },
        customItem: {

            type: String,
        },
        selectWhenUnmatched: {

            type: Boolean,
        },
        prefixIcon: {

            type: String,
        },
        suffixIcon: {

            type: String,
        },
        label: {

            type: String,
        },
        debounce: {
            default: 300,
            type: Number,
        },
        placement: {
            default: "bottom-start",
            type: String,
        },
        hideLoading: {

            type: Boolean,
        },
        popperAppendToBody: {
            default: true,
            type: Boolean,
        },
        highlightFirstItem: {

            type: Boolean,
        }
    }
});

Vue.component('ElDropdown', {
    props: {

        trigger: {
            default: "hover",
            type: String,
        },
        type: {

            type: String,
        },
        size: {

            type: String,
        },
        splitButton: {

            type: Boolean,
        },
        hideOnClick: {
            default: true,
            type: Boolean,
        },
        placement: {
            default: "bottom-end",
            type: String,
        },
        visibleArrow: {
            default: true,

        },
        showTimeout: {
            default: 250,
            type: Number,
        },
        hideTimeout: {
            default: 150,
            type: Number,
        },
        tabindex: {

            type: Number,
        }
    }
});

Vue.component('ElDropdownMenu', {
    props: {

        transformOrigin: {
            default: true,

        },
        placement: {
            default: "bottom",
            type: String,
        },
        boundariesPadding: {
            default: 5,
            type: Number,
        },
        reference: {


        },
        popper: {


        },
        offset: {


        },
        value: {

            type: Boolean,
        },
        visibleArrow: {
            default: true,
            type: Boolean,
        },
        arrowOffset: {

            type: Number,
        },
        appendToBody: {
            default: true,
            type: Boolean,
        },
        popperOptions: {
            default: undefined,
            type: Object,
        }
    }
});

Vue.component('ElDropdownItem', {
    props: {

        command: {


        },
        disabled: {

            type: Boolean,
        },
        divided: {

            type: Boolean,
        },
        icon: {

            type: String,
        }
    }
});

Vue.component('ElMenu', {
    props: {

        mode: {
            default: "vertical",
            type: String,
        },
        defaultActive: {

            type: String,
        },
        defaultOpeneds: {

            type: Array,
        },
        uniqueOpened: {

            type: Boolean,
        },
        router: {

            type: Boolean,
        },
        menuTrigger: {
            default: "hover",
            type: String,
        },
        collapse: {

            type: Boolean,
        },
        backgroundColor: {

            type: String,
        },
        textColor: {

            type: String,
        },
        activeTextColor: {

            type: String,
        },
        collapseTransition: {
            default: true,
            type: Boolean,
        }
    }
});

Vue.component('ElSubmenu', {
    props: {

        transformOrigin: {


        },
        offset: {


        },
        boundariesPadding: {
            default: 5,
            type: Number,
        },
        popperOptions: {
            default: undefined,
            type: Object,
        },
        index: {

            type: String,
        },
        showTimeout: {
            default: 300,
            type: Number,
        },
        hideTimeout: {
            default: 300,
            type: Number,
        },
        popperClass: {

            type: String,
        },
        disabled: {

            type: Boolean,
        },
        popperAppendToBody: {

            type: Boolean,
        }
    }
});

Vue.component('ElMenuItem', {
    props: {

        index: {


        },
        route: {


        },
        disabled: {

            type: Boolean,
        }
    }
});

Vue.component('ElMenuItemGroup', {
    props: {

        title: {

            type: String,
        }
    }
});

Vue.component('ElInput', {
    props: {

        value: {


        },
        size: {

            type: String,
        },
        resize: {

            type: String,
        },
        form: {

            type: String,
        },
        disabled: {

            type: Boolean,
        },
        readonly: {

            type: Boolean,
        },
        type: {
            default: "text",
            type: String,
        },
        autosize: {


        },
        autocomplete: {
            default: "off",
            type: String,
        },
        autoComplete: {

            type: String,
        },
        validateEvent: {
            default: true,
            type: Boolean,
        },
        suffixIcon: {

            type: String,
        },
        prefixIcon: {

            type: String,
        },
        label: {

            type: String,
        },
        clearable: {

            type: Boolean,
        },
        showPassword: {

            type: Boolean,
        },
        showWordLimit: {

            type: Boolean,
        },
        tabindex: {

            type: String,
        }
    }
});

Vue.component('ElInputNumber', {
    props: {

        step: {
            default: 1,
            type: Number,
        },
        stepStrictly: {

            type: Boolean,
        },
        max: {
            default: null,
            type: Number,
        },
        min: {
            default: null,
            type: Number,
        },
        value: {


        },
        disabled: {

            type: Boolean,
        },
        size: {

            type: String,
        },
        controls: {
            default: true,
            type: Boolean,
        },
        controlsPosition: {

            type: String,
        },
        name: {

            type: String,
        },
        label: {

            type: String,
        },
        placeholder: {

            type: String,
        },
        precision: {

            type: Number,
        }
    }
});

Vue.component('ElRadio', {
    props: {

        value: {


        },
        label: {


        },
        disabled: {

            type: Boolean,
        },
        name: {

            type: String,
        },
        border: {

            type: Boolean,
        },
        size: {

            type: String,
        }
    }
});

Vue.component('ElRadioGroup', {
    props: {

        value: {


        },
        size: {

            type: String,
        },
        fill: {

            type: String,
        },
        textColor: {

            type: String,
        },
        disabled: {

            type: Boolean,
        }
    }
});

Vue.component('ElRadioButton', {
    props: {

        label: {


        },
        disabled: {

            type: Boolean,
        },
        name: {

            type: String,
        }
    }
});

Vue.component('ElCheckbox', {
    props: {

        value: {


        },
        label: {


        },
        indeterminate: {

            type: Boolean,
        },
        disabled: {

            type: Boolean,
        },
        checked: {

            type: Boolean,
        },
        name: {

            type: String,
        },
        trueLabel: {


        },
        falseLabel: {


        },
        id: {

            type: String,
        },
        controls: {

            type: String,
        },
        border: {

            type: Boolean,
        },
        size: {

            type: String,
        }
    }
});

Vue.component('ElCheckboxButton', {
    props: {

        value: {


        },
        label: {


        },
        disabled: {

            type: Boolean,
        },
        checked: {

            type: Boolean,
        },
        name: {

            type: String,
        },
        trueLabel: {


        },
        falseLabel: {


        }
    }
});

Vue.component('ElCheckboxGroup', {
    props: {

        value: {


        },
        disabled: {

            type: Boolean,
        },
        min: {

            type: Number,
        },
        max: {

            type: Number,
        },
        size: {

            type: String,
        },
        fill: {

            type: String,
        },
        textColor: {

            type: String,
        }
    }
});

Vue.component('ElSwitch', {
    props: {

        value: {


        },
        disabled: {

            type: Boolean,
        },
        width: {
            default: 40,
            type: Number,
        },
        activeIconClass: {

            type: String,
        },
        inactiveIconClass: {

            type: String,
        },
        activeText: {

            type: String,
        },
        inactiveText: {

            type: String,
        },
        activeColor: {

            type: String,
        },
        inactiveColor: {

            type: String,
        },
        activeValue: {
            default: true,

        },
        inactiveValue: {


        },
        name: {

            type: String,
        },
        validateEvent: {
            default: true,
            type: Boolean,
        },
        id: {

            type: String,
        }
    }
});

Vue.component('ElSelect', {
    props: {

        name: {

            type: String,
        },
        id: {

            type: String,
        },
        value: {


        },
        autocomplete: {
            default: "off",
            type: String,
        },
        autoComplete: {

            type: String,
        },
        automaticDropdown: {

            type: Boolean,
        },
        size: {

            type: String,
        },
        disabled: {

            type: Boolean,
        },
        clearable: {

            type: Boolean,
        },
        filterable: {

            type: Boolean,
        },
        allowCreate: {

            type: Boolean,
        },
        loading: {

            type: Boolean,
        },
        popperClass: {

            type: String,
        },
        remote: {

            type: Boolean,
        },
        loadingText: {

            type: String,
        },
        noMatchText: {

            type: String,
        },
        noDataText: {

            type: String,
        },
        remoteMethod: {

            type: Function,
        },
        filterMethod: {

            type: Function,
        },
        multiple: {

            type: Boolean,
        },
        multipleLimit: {

            type: Number,
        },
        placeholder: {
            default: undefined,
            type: String,
        },
        defaultFirstOption: {

            type: Boolean,
        },
        reserveKeyword: {

            type: Boolean,
        },
        valueKey: {
            default: "value",
            type: String,
        },
        collapseTags: {

            type: Boolean,
        },
        popperAppendToBody: {
            default: true,
            type: Boolean,
        }
    }
});

Vue.component('ElOption', {
    props: {

        value: {


        },
        label: {


        },
        created: {

            type: Boolean,
        },
        disabled: {

            type: Boolean,
        }
    }
});

Vue.component('ElOptionGroup', {
    props: {

        label: {

            type: String,
        },
        disabled: {

            type: Boolean,
        }
    }
});

Vue.component('ElButton', {
    props: {

        type: {
            default: "default",
            type: String,
        },
        size: {

            type: String,
        },
        icon: {

            type: String,
        },
        nativeType: {
            default: "button",
            type: String,
        },
        loading: {

            type: Boolean,
        },
        disabled: {

            type: Boolean,
        },
        plain: {

            type: Boolean,
        },
        autofocus: {

            type: Boolean,
        },
        round: {

            type: Boolean,
        },
        circle: {

            type: Boolean,
        }
    }
});

Vue.component('ElTable', {
    props: {

        data: {
            default: undefined,
            type: Array,
        },
        size: {

            type: String,
        },
        width: {


        },
        height: {


        },
        maxHeight: {


        },
        fit: {
            default: true,
            type: Boolean,
        },
        stripe: {

            type: Boolean,
        },
        border: {

            type: Boolean,
        },
        rowKey: {


        },
        context: {


        },
        showHeader: {
            default: true,
            type: Boolean,
        },
        showSummary: {

            type: Boolean,
        },
        sumText: {

            type: String,
        },
        summaryMethod: {

            type: Function,
        },
        rowClassName: {


        },
        rowStyle: {


        },
        cellClassName: {


        },
        cellStyle: {


        },
        headerRowClassName: {


        },
        headerRowStyle: {


        },
        headerCellClassName: {


        },
        headerCellStyle: {


        },
        highlightCurrentRow: {

            type: Boolean,
        },
        currentRowKey: {


        },
        emptyText: {

            type: String,
        },
        expandRowKeys: {

            type: Array,
        },
        defaultExpandAll: {

            type: Boolean,
        },
        defaultSort: {

            type: Object,
        },
        tooltipEffect: {

            type: String,
        },
        spanMethod: {

            type: Function,
        },
        selectOnIndeterminate: {
            default: true,
            type: Boolean,
        },
        indent: {
            default: 16,
            type: Number,
        },
        treeProps: {
            default: undefined,
            type: Object,
        },
        lazy: {

            type: Boolean,
        },
        load: {

            type: Function,
        }
    }
});

Vue.component('ElTableColumn', {
    props: {

        type: {
            default: "default",
            type: String,
        },
        label: {

            type: String,
        },
        className: {

            type: String,
        },
        labelClassName: {

            type: String,
        },
        property: {

            type: String,
        },
        prop: {

            type: String,
        },
        width: {


        },
        minWidth: {


        },
        renderHeader: {

            type: Function,
        },
        sortable: {


        },
        sortMethod: {

            type: Function,
        },
        sortBy: {


        },
        resizable: {
            default: true,
            type: Boolean,
        },
        columnKey: {

            type: String,
        },
        align: {

            type: String,
        },
        headerAlign: {

            type: String,
        },
        showTooltipWhenOverflow: {

            type: Boolean,
        },
        showOverflowTooltip: {

            type: Boolean,
        },
        fixed: {


        },
        formatter: {

            type: Function,
        },
        selectable: {

            type: Function,
        },
        reserveSelection: {

            type: Boolean,
        },
        filterMethod: {

            type: Function,
        },
        filteredValue: {

            type: Array,
        },
        filters: {

            type: Array,
        },
        filterPlacement: {

            type: String,
        },
        filterMultiple: {
            default: true,
            type: Boolean,
        },
        index: {


        },
        sortOrders: {
            default: undefined,
            type: Array,
        }
    }
});

Vue.component('ElDatePicker', {
    props: {

        appendToBody: {
            default: true,
            type: Boolean,
        },
        offset: {


        },
        boundariesPadding: {
            default: 5,
            type: Number,
        },
        arrowOffset: {
            default: 35,
            type: Number,
        },
        size: {

            type: String,
        },
        format: {

            type: String,
        },
        valueFormat: {

            type: String,
        },
        readonly: {

            type: Boolean,
        },
        placeholder: {

            type: String,
        },
        startPlaceholder: {

            type: String,
        },
        endPlaceholder: {

            type: String,
        },
        prefixIcon: {

            type: String,
        },
        clearIcon: {
            default: "el-icon-circle-close",
            type: String,
        },
        name: {


        },
        disabled: {

            type: Boolean,
        },
        clearable: {
            default: true,
            type: Boolean,
        },
        id: {


        },
        popperClass: {

            type: String,
        },
        editable: {
            default: true,
            type: Boolean,
        },
        align: {
            default: "left",
            type: String,
        },
        value: {


        },
        defaultValue: {


        },
        defaultTime: {


        },
        rangeSeparator: {
            default: "-",

        },
        pickerOptions: {


        },
        unlinkPanels: {

            type: Boolean,
        },
        validateEvent: {
            default: true,
            type: Boolean,
        },
        type: {
            default: "date",
            type: String,
        },
        timeArrowControl: {

            type: Boolean,
        }
    }
});

Vue.component('ElTimeSelect', {
    props: {

        appendToBody: {
            default: true,
            type: Boolean,
        },
        offset: {


        },
        boundariesPadding: {
            default: 5,
            type: Number,
        },
        arrowOffset: {
            default: 35,
            type: Number,
        },
        size: {

            type: String,
        },
        format: {

            type: String,
        },
        valueFormat: {

            type: String,
        },
        readonly: {

            type: Boolean,
        },
        placeholder: {

            type: String,
        },
        startPlaceholder: {

            type: String,
        },
        endPlaceholder: {

            type: String,
        },
        prefixIcon: {

            type: String,
        },
        clearIcon: {
            default: "el-icon-circle-close",
            type: String,
        },
        name: {


        },
        disabled: {

            type: Boolean,
        },
        clearable: {
            default: true,
            type: Boolean,
        },
        id: {


        },
        popperClass: {

            type: String,
        },
        editable: {
            default: true,
            type: Boolean,
        },
        align: {
            default: "left",
            type: String,
        },
        value: {


        },
        defaultValue: {


        },
        defaultTime: {


        },
        rangeSeparator: {
            default: "-",

        },
        pickerOptions: {


        },
        unlinkPanels: {

            type: Boolean,
        },
        validateEvent: {
            default: true,
            type: Boolean,
        },
        type: {
            default: "time-select",
            type: String,
        }
    }
});

Vue.component('ElTimePicker', {
    props: {

        appendToBody: {
            default: true,
            type: Boolean,
        },
        offset: {


        },
        boundariesPadding: {
            default: 5,
            type: Number,
        },
        arrowOffset: {
            default: 35,
            type: Number,
        },
        size: {

            type: String,
        },
        format: {

            type: String,
        },
        valueFormat: {

            type: String,
        },
        readonly: {

            type: Boolean,
        },
        placeholder: {

            type: String,
        },
        startPlaceholder: {

            type: String,
        },
        endPlaceholder: {

            type: String,
        },
        prefixIcon: {

            type: String,
        },
        clearIcon: {
            default: "el-icon-circle-close",
            type: String,
        },
        name: {


        },
        disabled: {

            type: Boolean,
        },
        clearable: {
            default: true,
            type: Boolean,
        },
        id: {


        },
        popperClass: {

            type: String,
        },
        editable: {
            default: true,
            type: Boolean,
        },
        align: {
            default: "left",
            type: String,
        },
        value: {


        },
        defaultValue: {


        },
        defaultTime: {


        },
        rangeSeparator: {
            default: "-",

        },
        pickerOptions: {


        },
        unlinkPanels: {

            type: Boolean,
        },
        validateEvent: {
            default: true,
            type: Boolean,
        },
        isRange: {

            type: Boolean,
        },
        arrowControl: {

            type: Boolean,
        }
    }
});

Vue.component('ElPopover', {
    props: {

        transformOrigin: {
            default: true,

        },
        placement: {
            default: "bottom",
            type: String,
        },
        boundariesPadding: {
            default: 5,
            type: Number,
        },
        reference: {


        },
        popper: {


        },
        offset: {


        },
        value: {

            type: Boolean,
        },
        visibleArrow: {
            default: true,

        },
        arrowOffset: {

            type: Number,
        },
        appendToBody: {
            default: true,
            type: Boolean,
        },
        popperOptions: {
            default: undefined,
            type: Object,
        },
        trigger: {
            default: "click",
            type: String,
        },
        openDelay: {

            type: Number,
        },
        closeDelay: {
            default: 200,
            type: Number,
        },
        title: {

            type: String,
        },
        disabled: {

            type: Boolean,
        },
        content: {

            type: String,
        },
        popperClass: {

            type: String,
        },
        width: {


        },
        transition: {
            default: "fade-in-linear",
            type: String,
        },
        tabindex: {

            type: Number,
        }
    }
});

Vue.component('ElTooltip', {
    props: {

        transformOrigin: {
            default: true,

        },
        placement: {
            default: "bottom",
            type: String,
        },
        boundariesPadding: {
            default: 5,
            type: Number,
        },
        reference: {


        },
        popper: {


        },
        offset: {


        },
        value: {

            type: Boolean,
        },
        visibleArrow: {
            default: true,

        },
        arrowOffset: {

            type: Number,
        },
        appendToBody: {
            default: true,
            type: Boolean,
        },
        popperOptions: {
            default: undefined,

        },
        openDelay: {

            type: Number,
        },
        disabled: {

            type: Boolean,
        },
        manual: {

            type: Boolean,
        },
        effect: {
            default: "dark",
            type: String,
        },
        popperClass: {

            type: String,
        },
        content: {

            type: String,
        },
        transition: {
            default: "el-fade-in-linear",
            type: String,
        },
        enterable: {
            default: true,
            type: Boolean,
        },
        hideAfter: {

            type: Number,
        },
        tabindex: {

            type: Number,
        }
    }
});

Vue.component('ElBreadcrumb', {
    props: {

        separator: {
            default: "/",
            type: String,
        },
        separatorClass: {

            type: String,
        }
    }
});

Vue.component('ElBreadcrumbItem', {
    props: {

        to: {


        },
        replace: {

            type: Boolean,
        }
    }
});

Vue.component('ElForm', {
    props: {

        model: {

            type: Object,
        },
        rules: {

            type: Object,
        },
        labelPosition: {

            type: String,
        },
        labelWidth: {

            type: String,
        },
        labelSuffix: {

            type: String,
        },
        inline: {

            type: Boolean,
        },
        inlineMessage: {

            type: Boolean,
        },
        statusIcon: {

            type: Boolean,
        },
        showMessage: {
            default: true,
            type: Boolean,
        },
        size: {

            type: String,
        },
        disabled: {

            type: Boolean,
        },
        validateOnRuleChange: {
            default: true,
            type: Boolean,
        },
        hideRequiredAsterisk: {

            type: Boolean,
        }
    }
});

Vue.component('ElFormItem', {
    props: {

        label: {

            type: String,
        },
        labelWidth: {

            type: String,
        },
        prop: {

            type: String,
        },
        required: {

            type: Boolean,
        },
        rules: {


        },
        error: {

            type: String,
        },
        validateStatus: {

            type: String,
        },
        for: {

            type: String,
        },
        inlineMessage: {


        },
        showMessage: {
            default: true,
            type: Boolean,
        },
        size: {

            type: String,
        }
    }
});

Vue.component('ElTabs', {
    props: {

        type: {

            type: String,
        },
        activeName: {

            type: String,
        },
        closable: {

            type: Boolean,
        },
        addable: {

            type: Boolean,
        },
        value: {


        },
        editable: {

            type: Boolean,
        },
        tabPosition: {
            default: "top",
            type: String,
        },
        beforeLeave: {

            type: Function,
        },
        stretch: {

            type: Boolean,
        }
    }
});

Vue.component('ElTabPane', {
    props: {

        label: {

            type: String,
        },
        labelContent: {

            type: Function,
        },
        name: {

            type: String,
        },
        closable: {

            type: Boolean,
        },
        disabled: {

            type: Boolean,
        },
        lazy: {

            type: Boolean,
        }
    }
});

Vue.component('ElTag', {
    props: {

        text: {

            type: String,
        },
        closable: {

            type: Boolean,
        },
        type: {

            type: String,
        },
        hit: {

            type: Boolean,
        },
        disableTransitions: {

            type: Boolean,
        },
        color: {

            type: String,
        },
        size: {

            type: String,
        },
        effect: {
            default: "light",
            type: String,
        }
    }
});

Vue.component('ElTree', {
    props: {

        data: {

            type: Array,
        },
        emptyText: {
            default: undefined,
            type: String,
        },
        renderAfterExpand: {
            default: true,
            type: Boolean,
        },
        nodeKey: {

            type: String,
        },
        checkStrictly: {

            type: Boolean,
        },
        defaultExpandAll: {

            type: Boolean,
        },
        expandOnClickNode: {
            default: true,
            type: Boolean,
        },
        checkOnClickNode: {

            type: Boolean,
        },
        checkDescendants: {

            type: Boolean,
        },
        autoExpandParent: {
            default: true,
            type: Boolean,
        },
        defaultCheckedKeys: {

            type: Array,
        },
        defaultExpandedKeys: {

            type: Array,
        },
        currentNodeKey: {


        },
        renderContent: {

            type: Function,
        },
        showCheckbox: {

            type: Boolean,
        },
        draggable: {

            type: Boolean,
        },
        allowDrag: {

            type: Function,
        },
        allowDrop: {

            type: Function,
        },
        props: {
            default: undefined,

        },
        lazy: {

            type: Boolean,
        },
        highlightCurrent: {

            type: Boolean,
        },
        load: {

            type: Function,
        },
        filterNodeMethod: {

            type: Function,
        },
        accordion: {

            type: Boolean,
        },
        indent: {
            default: 18,
            type: Number,
        },
        iconClass: {

            type: String,
        }
    }
});

Vue.component('ElAlert', {
    props: {

        title: {

            type: String,
        },
        description: {

            type: String,
        },
        type: {
            default: "info",
            type: String,
        },
        closable: {
            default: true,
            type: Boolean,
        },
        closeText: {

            type: String,
        },
        showIcon: {

            type: Boolean,
        },
        center: {

            type: Boolean,
        },
        effect: {
            default: "light",
            type: String,
        }
    }
});

Vue.component('ElSlider', {
    props: {

        min: {

            type: Number,
        },
        max: {
            default: 100,
            type: Number,
        },
        step: {
            default: 1,
            type: Number,
        },
        value: {


        },
        showInput: {

            type: Boolean,
        },
        showInputControls: {
            default: true,
            type: Boolean,
        },
        inputSize: {
            default: "small",
            type: String,
        },
        showStops: {

            type: Boolean,
        },
        showTooltip: {
            default: true,
            type: Boolean,
        },
        formatTooltip: {

            type: Function,
        },
        disabled: {

            type: Boolean,
        },
        range: {

            type: Boolean,
        },
        vertical: {

            type: Boolean,
        },
        height: {

            type: String,
        },
        debounce: {
            default: 300,
            type: Number,
        },
        label: {

            type: String,
        },
        tooltipClass: {

            type: String,
        },
        marks: {

            type: Object,
        }
    }
});

Vue.component('ElIcon', {
    props: {

        name: {

            type: String,
        }
    }
});

Vue.component('ElRow', {
    props: {

        tag: {
            default: "div",
            type: String,
        },
        gutter: {

            type: Number,
        },
        type: {

            type: String,
        },
        justify: {
            default: "start",
            type: String,
        },
        align: {
            default: "top",
            type: String,
        }
    }
});

Vue.component('ElCol', {
    props: {

        span: {
            default: 24,
            type: Number,
        },
        tag: {
            default: "div",
            type: String,
        },
        offset: {

            type: Number,
        },
        pull: {

            type: Number,
        },
        push: {

            type: Number,
        },
        xs: {


        },
        sm: {


        },
        md: {


        },
        lg: {


        },
        xl: {


        }
    }
});

Vue.component('ElUpload', {
    props: {

        action: {

            type: String,
        },
        headers: {
            default: undefined,
            type: Object,
        },
        data: {

            type: Object,
        },
        multiple: {

            type: Boolean,
        },
        name: {
            default: "file",
            type: String,
        },
        drag: {

            type: Boolean,
        },
        dragger: {

            type: Boolean,
        },
        withCredentials: {

            type: Boolean,
        },
        showFileList: {
            default: true,
            type: Boolean,
        },
        accept: {

            type: String,
        },
        type: {
            default: "select",
            type: String,
        },
        beforeUpload: {

            type: Function,
        },
        beforeRemove: {

            type: Function,
        },
        onRemove: {
            default: undefined,
            type: Function,
        },
        onChange: {
            default: undefined,
            type: Function,
        },
        onPreview: {

            type: Function,
        },
        onSuccess: {
            default: undefined,
            type: Function,
        },
        onProgress: {
            default: undefined,
            type: Function,
        },
        onError: {
            default: undefined,
            type: Function,
        },
        fileList: {
            default: undefined,
            type: Array,
        },
        autoUpload: {
            default: true,
            type: Boolean,
        },
        listType: {
            default: "text",
            type: String,
        },
        httpRequest: {

            type: Function,
        },
        disabled: {

            type: Boolean,
        },
        limit: {

            type: Number,
        },
        onExceed: {
            default: undefined,
            type: Function,
        }
    }
});

Vue.component('ElProgress', {
    props: {

        type: {
            default: "line",
            type: String,
        },
        percentage: {

            type: Number,
        },
        status: {

            type: String,
        },
        strokeWidth: {
            default: 6,
            type: Number,
        },
        textInside: {

            type: Boolean,
        },
        width: {
            default: 126,
            type: Number,
        },
        showText: {
            default: true,
            type: Boolean,
        },
        color: {


        },
        format: {

            type: Function,
        }
    }
});

Vue.component('ElSpinner', {
    props: {

        type: {

            type: String,
        },
        radius: {
            default: 100,
            type: Number,
        },
        strokeWidth: {
            default: 5,
            type: Number,
        },
        strokeColor: {
            default: "#efefef",
            type: String,
        }
    }
});

Vue.component('ElBadge', {
    props: {

        value: {


        },
        max: {

            type: Number,
        },
        isDot: {

            type: Boolean,
        },
        hidden: {

            type: Boolean,
        },
        type: {

            type: String,
        }
    }
});

Vue.component('ElCard', {
    props: {

        header: {


        },
        bodyStyle: {


        },
        shadow: {

            type: String,
        }
    }
});

Vue.component('ElRate', {
    props: {

        value: {

            type: Number,
        },
        lowThreshold: {
            default: 2,
            type: Number,
        },
        highThreshold: {
            default: 4,
            type: Number,
        },
        max: {
            default: 5,
            type: Number,
        },
        colors: {
            default: undefined,

        },
        voidColor: {
            default: "#C6D1DE",
            type: String,
        },
        disabledVoidColor: {
            default: "#EFF2F7",
            type: String,
        },
        iconClasses: {
            default: undefined,

        },
        voidIconClass: {
            default: "el-icon-star-off",
            type: String,
        },
        disabledVoidIconClass: {
            default: "el-icon-star-on",
            type: String,
        },
        disabled: {

            type: Boolean,
        },
        allowHalf: {

            type: Boolean,
        },
        showText: {

            type: Boolean,
        },
        showScore: {

            type: Boolean,
        },
        textColor: {
            default: "#1f2d3d",
            type: String,
        },
        texts: {
            default: undefined,
            type: Array,
        },
        scoreTemplate: {
            default: "{value}",
            type: String,
        }
    }
});

Vue.component('ElSteps', {
    props: {

        space: {


        },
        active: {

            type: Number,
        },
        direction: {
            default: "horizontal",
            type: String,
        },
        alignCenter: {

            type: Boolean,
        },
        simple: {

            type: Boolean,
        },
        finishStatus: {
            default: "finish",
            type: String,
        },
        processStatus: {
            default: "process",
            type: String,
        }
    }
});

Vue.component('ElStep', {
    props: {

        title: {

            type: String,
        },
        icon: {

            type: String,
        },
        description: {

            type: String,
        },
        status: {

            type: String,
        }
    }
});

Vue.component('ElCarousel', {
    props: {

        initialIndex: {

            type: Number,
        },
        height: {

            type: String,
        },
        trigger: {
            default: "hover",
            type: String,
        },
        autoplay: {
            default: true,
            type: Boolean,
        },
        interval: {
            default: 3000,
            type: Number,
        },
        indicatorPosition: {

            type: String,
        },
        indicator: {
            default: true,
            type: Boolean,
        },
        arrow: {
            default: "hover",
            type: String,
        },
        type: {

            type: String,
        },
        loop: {
            default: true,
            type: Boolean,
        },
        direction: {
            default: "horizontal",
            type: String,
        }
    }
});

Vue.component('ElScrollbar', {
    props: {

        native: {

            type: Boolean,
        },
        wrapStyle: {


        },
        wrapClass: {


        },
        viewClass: {


        },
        viewStyle: {


        },
        noresize: {

            type: Boolean,
        },
        tag: {
            default: "div",
            type: String,
        }
    }
});

Vue.component('ElCarouselItem', {
    props: {

        name: {

            type: String,
        },
        label: {


        }
    }
});

Vue.component('ElCollapse', {
    props: {

        accordion: {

            type: Boolean,
        },
        value: {
            default: undefined,

        }
    }
});

Vue.component('ElCollapseItem', {
    props: {

        title: {

            type: String,
        },
        name: {
            default: undefined,

        },
        disabled: {

            type: Boolean,
        }
    }
});

Vue.component('ElCascader', {
    props: {

        placement: {
            default: "bottom-start",
            type: String,
        },
        appendToBody: {
            default: true,
            type: Boolean,
        },
        visibleArrow: {
            default: true,
            type: Boolean,
        },
        arrowOffset: {
            default: 35,
            type: Number,
        },
        offset: {


        },
        boundariesPadding: {
            default: 5,
            type: Number,
        },
        popperOptions: {
            default: undefined,
            type: Object,
        },
        value: {


        },
        options: {

            type: Array,
        },
        props: {

            type: Object,
        },
        size: {

            type: String,
        },
        placeholder: {
            default: undefined,
            type: String,
        },
        disabled: {

            type: Boolean,
        },
        clearable: {

            type: Boolean,
        },
        filterable: {

            type: Boolean,
        },
        filterMethod: {

            type: Function,
        },
        separator: {
            default: " / ",
            type: String,
        },
        showAllLevels: {
            default: true,
            type: Boolean,
        },
        collapseTags: {

            type: Boolean,
        },
        debounce: {
            default: 300,
            type: Number,
        },
        beforeFilter: {
            default: undefined,
            type: Function,
        },
        popperClass: {

            type: String,
        }
    }
});

Vue.component('ElColorPicker', {
    props: {

        value: {

            type: String,
        },
        showAlpha: {

            type: Boolean,
        },
        colorFormat: {

            type: String,
        },
        disabled: {

            type: Boolean,
        },
        size: {

            type: String,
        },
        popperClass: {

            type: String,
        },
        predefine: {

            type: Array,
        }
    }
});

Vue.component('ElTransfer', {
    props: {

        data: {
            default: undefined,
            type: Array,
        },
        titles: {
            default: undefined,
            type: Array,
        },
        buttonTexts: {
            default: undefined,
            type: Array,
        },
        filterPlaceholder: {

            type: String,
        },
        filterMethod: {

            type: Function,
        },
        leftDefaultChecked: {
            default: undefined,
            type: Array,
        },
        rightDefaultChecked: {
            default: undefined,
            type: Array,
        },
        renderContent: {

            type: Function,
        },
        value: {
            default: undefined,
            type: Array,
        },
        format: {
            default: undefined,
            type: Object,
        },
        filterable: {

            type: Boolean,
        },
        props: {
            default: undefined,
            type: Object,
        },
        targetOrder: {
            default: "original",
            type: String,
        }
    }
});

Vue.component('ElContainer', {
    props: {

        direction: {

            type: String,
        }
    }
});

Vue.component('ElHeader', {
    props: {

        height: {
            default: "60px",
            type: String,
        }
    }
});

Vue.component('ElAside', {
    props: {

        width: {
            default: "300px",
            type: String,
        }
    }
});

Vue.component('ElFooter', {
    props: {

        height: {
            default: "60px",
            type: String,
        }
    }
});

Vue.component('ElTimeline', {
    props: {

        reverse: {

            type: Boolean,
        }
    }
});

Vue.component('ElTimelineItem', {
    props: {

        timestamp: {

            type: String,
        },
        hideTimestamp: {

            type: Boolean,
        },
        placement: {
            default: "bottom",
            type: String,
        },
        type: {

            type: String,
        },
        color: {

            type: String,
        },
        size: {
            default: "normal",
            type: String,
        },
        icon: {

            type: String,
        }
    }
});

Vue.component('ElLink', {
    props: {

        type: {
            default: "default",
            type: String,
        },
        underline: {
            default: true,
            type: Boolean,
        },
        disabled: {

            type: Boolean,
        },
        href: {

            type: String,
        },
        icon: {

            type: String,
        }
    }
});

Vue.component('ElDivider', {
    props: {

        direction: {
            default: "horizontal",
            type: String,
        },
        contentPosition: {
            default: "center",
            type: String,
        }
    }
});

Vue.component('ElImage', {
    props: {

        src: {

            type: String,
        },
        fit: {

            type: String,
        },
        lazy: {

            type: Boolean,
        },
        scrollContainer: {


        },
        previewSrcList: {
            default: undefined,
            type: Array,
        },
        zIndex: {
            default: 2000,
            type: Number,
        }
    }
});

Vue.component('ElCalendar', {
    props: {

        value: {


        },
        range: {

            type: Array,
        },
        firstDayOfWeek: {
            default: 1,
            type: Number,
        }
    }
});

Vue.component('ElBacktop', {
    props: {

        visibilityHeight: {
            default: 200,
            type: Number,
        },
        target: {


        },
        right: {
            default: 40,
            type: Number,
        },
        bottom: {
            default: 40,
            type: Number,
        }
    }
});

Vue.component('ElPageHeader', {
    props: {

        title: {
            default: undefined,
            type: String,
        },
        content: {

            type: String,
        }
    }
});

Vue.component('ElCascaderPanel', {
    props: {

        value: {


        },
        options: {

            type: Array,
        },
        props: {

            type: Object,
        },
        border: {
            default: true,
            type: Boolean,
        },
        renderLabel: {

            type: Function,
        }
    }
});

Vue.component('ElAvatar', {
    props: {

        size: {


        },
        shape: {
            default: "circle",
            type: String,
        },
        icon: {

            type: String,
        },
        src: {

            type: String,
        },
        alt: {

            type: String,
        },
        srcSet: {

            type: String,
        },
        error: {

            type: Function,
        },
        fit: {
            default: "cover",
            type: String,
        }
    }
});

Vue.component('ElDrawer', {
    props: {

        visible: {

            type: Boolean,
        },
        openDelay: {


        },
        closeDelay: {


        },
        zIndex: {


        },
        modal: {
            default: true,
            type: Boolean,
        },
        modalFade: {
            default: true,
            type: Boolean,
        },
        modalClass: {


        },
        modalAppendToBody: {

            type: Boolean,
        },
        lockScroll: {
            default: true,
            type: Boolean,
        },
        closeOnPressEscape: {

            type: Boolean,
        },
        closeOnClickModal: {

            type: Boolean,
        },
        appendToBody: {
            default: true,
            type: Boolean,
        },
        beforeClose: {

            type: Function,
        },
        customClass: {

            type: String,
        },
        destroyOnClose: {

            type: Boolean,
        },
        direction: {
            default: "rtl",
            type: String,
        },
        showClose: {
            default: true,
            type: Boolean,
        },
        size: {
            default: "30%",
            type: String,
        },
        title: {

            type: String,
        },
        wrapperClosable: {
            default: true,
            type: Boolean,
        }
    }
});

Vue.component('py-layout-header', {
    props: {

        classPrefix: {
            default: undefined,
            type: String,
        }
    }
});

Vue.component('py-toolbar', {
    props: {

        classPrefix: {
            default: undefined,
            type: String,
        },
        title: {

            type: String,
        },
        titleLink: {

            type: String,
        },
        showTitle: {

            type: Boolean,
        },
        showToggle: {

            type: Boolean,
        }
    }
});

Vue.component('py-menu-editor', {
    props: {

        classPrefix: {
            default: undefined,
            type: String,
        },
        compact: {

            type: Boolean,
        },
        scrollable: {

            type: Boolean,
        }
    }
});

Vue.component('py-menu-editor-form', {
    props: {

        classPrefix: {
            default: undefined,
            type: String,
        },
        mode: {

            type: String,
        },
        slug: {

            type: String,
        },
        id: {

            type: Number,
        },
        parent: {

            type: Number,
        },
        hide: {

            type: Boolean,
        }
    }
});

Vue.component('keep-alive', {
    props: {

        include: {


        },
        exclude: {


        },
        max: {


        }
    }
});

Vue.component('transition', {
    props: {

        name: {

            type: String,
        },
        appear: {

            type: Boolean,
        },
        css: {

            type: Boolean,
        },
        mode: {

            type: String,
        },
        type: {

            type: String,
        },
        enterClass: {

            type: String,
        },
        leaveClass: {

            type: String,
        },
        enterToClass: {

            type: String,
        },
        leaveToClass: {

            type: String,
        },
        enterActiveClass: {

            type: String,
        },
        leaveActiveClass: {

            type: String,
        },
        appearClass: {

            type: String,
        },
        appearActiveClass: {

            type: String,
        },
        appearToClass: {

            type: String,
        },
        duration: {


        }
    }
});

Vue.component('transition-group', {
    props: {

        tag: {


        },
        moveClass: {


        },
        name: {


        },
        appear: {


        },
        css: {


        },
        type: {


        },
        enterClass: {


        },
        leaveClass: {


        },
        enterToClass: {


        },
        leaveToClass: {


        },
        enterActiveClass: {


        },
        leaveActiveClass: {


        },
        appearClass: {


        },
        appearActiveClass: {


        },
        appearToClass: {


        },
        duration: {


        }
    }
});
