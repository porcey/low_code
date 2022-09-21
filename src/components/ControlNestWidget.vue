<template>
    <div>
        <!-- :class="[isWidget ? 'nest-child' : 'nest-area']" -->
        <draggable v-model="widgetList" group="widget" animation="500" :class="[isWidget ? 'nest-child' : 'nest-area']">
            <!-- 拖动进来的组件会被添加到widgetList中 -->
            <!-- 当前item传进widgetShape组件 :theWidget="item"-->
            <WidgetShape v-for="item in widgetList" :key="item.id" :theWidget="item" :widgets="widgetList">
                <component :is="item.component" v-bind="item">
                    <ControlNestWidget :isWidget=" true" :widgets.sync="item.children">
                    </ControlNestWidget>
                </component>
            </WidgetShape>
        </draggable>
    </div>
</template>

<script>
import WidgetShape from './WidgetShape.vue';
import { mapState } from 'vuex';
export default {
    name: 'ControlNestWidget',
    provide() {
        return {
            widgetsCtrl: this
        }
    },
    props: {
        isWidget: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            widgetList: [

            ],
            row: false,
            column: false
        }
    },

    components: {
        WidgetShape,
    },
    watch: {
        isWidget() {
            console.log('isWidget changed');
        },
        widgetList() {
            console.log('wdgetList更新啦：', this.widgetList);
        }
    },
    methods: {
        getClass() {
            if (this.column) {
                console.log("1");
                return 'nest-child-col'
            } else if (this.row) {
                console.log("2");
                return 'nest-child-row'
            } else {
                console.log("4");
                return ''
            }
            // return 'test'
        },
        updateRow(val) {
            console.log("状态改变！");
            this.row = true
        },
        updateCol() {
            this.column = true
        }
    },
    computed: {
        ...mapState(['widgetsShow']),
    },
    mounted() {
        // console.log("我也可以了");
        this.$bus.$on('rowContainer', this.updateRow)
    }
}
</script>

<style scoped lang="scss">
.nest-child {
    min-height: 80px;

}

.nest-area {
    // display: flex;
    // flex-direction: row;
    min-height: 600px;
}

.test {
    background-color: pink;
}
</style>
