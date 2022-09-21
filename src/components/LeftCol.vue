<template>
    <div class="root">
        <div class="wrap-label">
            <span>物料列表</span>
        </div>
        <div class="material">
            <!-- <button @click="getClass">点击获取class</button> -->
            <draggable v-model="$initializing" :options="{
                group: {
                    name: 'widget',
                    pull: 'clone',
                    put: 'false'
                },
                sort:false
            }" animation="300" :clone="activeClone">
                <transition-group class="panel">
                    <div v-for="(item,index) in $initializing" :key="index" class="box" :icon="item">{{item.name}}
                        <span :class="item.icon"></span>
                    </div>
                </transition-group>
            </draggable>
        </div>

    </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { cloneDeep } from 'lodash'
export default {
    data() {
        return {
            widgets: [
            ],
            nest: [
            ],
            activeClone(model) {
                // 克隆组件触发事件'activeClone',将克隆的组件加上id属性传递过去
                return {
                    ...cloneDeep(model),
                    id: nanoid()
                }

            },
        }
    },
    methods: {
    },
}
</script>

<style scoped lang="scss">
.root {
    height: 100%;
    width: 200px;
}

.material {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    // flex-wrap: nowrap;

    .box {
        display: inline-block;
        flex: 1;
        width: 100px;
        height: 100px;
        background-color: white;
        text-align: center;
        line-height: 100px;
        font-size: 15px;
    }

    .box:hover {
        background-color: skyblue;
    }
}

.nest {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: pink;
}

.wrap-label {
    padding: 10px 12px;

    background: #e8f0fb;
    font-size: 14px;

    color: #323233;

    span {
        &::before {
            content: ".";
            width: 3px;

            height: 10px;

            margin-right: 8px;

            background: $color-theme;
        }
    }
}
</style>