export default {
    props: {
        id: {},
        value: {},
        label: {
            type: String,
        },
        options: {
            type: Object,
            default: () => { }
        }
    },

    data() {
        return {
            mValue: undefined,
            defaultOptions: {}      // 如有默认options配置，则在调用组件重新定义此变量
        };
    },

    computed: {
        mOptions() {
            // console.log('打印结果', this.defaultOptions, this.options)
            return { ...this.defaultOptions, ...this.options }
        },
        mObj() {
            return {
                value: this.mValue,
                label: this.label,
                // id: this.curComponent.id
            }
        }
    },

    watch: {
        value: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                this.mValue = this.value;
            },
        },
        mValue: {
            handler() {
                this.$bus.$emit("input", this.mObj);
                this.$bus.$emit("change", this.mObj);
            },
        },
    },
}