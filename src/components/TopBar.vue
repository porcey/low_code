<template>
    <!-- <div id="top">
        Low-Code 低代码平台
    </div> -->
    <div class="page-head">
        <span class="title">Low-Code</span>
        <div class="page-control">
            <el-button class="page-item" size="small" @click="deleteAll">清空当前画布</el-button>
            <el-button class="page-item" size="small" @click="newPage">新建画布</el-button>
            <el-button class="page-item" size="small" @click="savePage">保存画布</el-button>
            <el-button class="page-item" size="small" @click="deletePage">删除画布</el-button>
            <div class="page-option page-item">
                <el-select v-model="curPage" placeholder="" @change="changePage">
                    <el-option v-for="item in pageOptions" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <!-- <div class="page-menu page-item">
                <div class="panel-size-select">
                    <el-select v-model="value" class="m-2" placeholder="IPhone XR" size="large" @change="emitValue">
                        <el-option v-for="item in options" :key="item.value.join('')" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
            </div> -->
            <!-- <el-button class="page-item" size="small" @click="toPreview">预览</el-button> -->
        </div>
        <!-- 预览 -->
        <!-- <Preview v-if="isShowPreview" @change="handlePreviewChange" /> -->

    </div>
</template>

<script>
import { nanoid } from 'nanoid';
import { mapState } from "vuex";
export default {
    data() {
        return {
            // value: [375, 667],
            value: 0,
            curPage: 0,
            pageOptions: [
                {
                    value: 0,
                    label: '页面0'
                }
            ],

            options: [
                {
                    value: [375, 667],
                    label: "iPhone XR",
                },
                {
                    value: [375, 812],
                    label: "iPhone 13 mini",
                },
                {
                    value: [428, 926],
                    label: "iPhone 13 Pro Max",
                },
                {
                    value: [744, 1133],
                    label: "iPad Mini (6th gen)",
                },
                {
                    value: [1024, 1366],
                    label: 'iPad Pro (5th gen 12.9")',
                },
            ],
            isShowPreview: false,
            userInfo: {},
            drawer: false
        }
    },
    computed: mapState(["pages"]),
    mounted() {
        // 初始化新页面
        this.$store.commit('PUSHPAGE', {
            id: nanoid(),
            index: 0,
            widgets: []
        })
        this.$bus.$on('curWidgetList', value => {
            this.$store.commit('UPDATEPAGE', { index: this.curPage, w: value })
        })
    },
    methods: {
        deleteAll() {
            this.$bus.$emit("deleteWidgets", true);
        },
        newPage() {
            console.log("正在新建画布！");
            this.deleteAll()
            let len = this.pages.length
            let i = len > 0 ? this.pages[len - 1].index + 1 : 0
            const page = {
                id: nanoid(),
                index: i,
                widgets: []
            }
            // 将新页面压入页面库（pages）
            this.$store.commit('PUSHPAGE', page)
            // 当前页面序号
            this.curPage = i
            // 当前页面配置 用于el-select
            this.pageOptions.push({
                value: this.curPage,
                label: `页面${this.curPage}`,
            })
            // 刚进入页面创建的新页面不提示
            if (i) {
                this.$notify({
                    title: "成功",
                    message: "创建成功！",
                    type: "success",
                });
            }
            this.changePage()
        },
        savePage() {
            this.$bus.$emit('savePage', true)
        },
        changePage() {
            console.log("TopBar:切换！", this.curPage);
            let pageIndex = this.pages.findIndex(obj => obj.index === this.curPage)
            this.$bus.$emit('changeShowPage', this.pages[pageIndex].widgets)
        },
        deletePage() {
            if (this.pages.length === 1) {
                this.$notify.error({
                    title: "失败",
                    message: "不可删除画布",
                });
            } else {
                this.$store.commit('DELPAGE', this.curPage)
                let delIndex = this.pageOptions.findIndex(obj => obj.value === this.curPage)
                this.pageOptions.splice(delIndex, 1)
                // 如果删除的的是第一个页面
                if (this.curPage === delIndex) {
                    console.log("第一个");
                    this.curPage = this.pages[0].index
                } else {
                    console.log("不是第一个", delIndex);
                    this.curPage--
                }
                this.changePage()
                this.$notify({
                    title: "成功",
                    message: "成功删除画布",
                    type: "success",
                });
            }
        }
    },
}
</script>

<style scoped lang="scss">
#top {
    position: relative;
    z-index: 999;
    width: 100%;
    height: 50px;
    background-color: white;
    box-shadow: 0 -10px 6px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    line-height: 50px;
}

.page-head {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 56px;
    padding: 0 20px;
    background: #fff;
    box-shadow: 0 -10px 6px 10px rgba(0, 0, 0, 0.2);
    z-index: 999;

}

.page-control {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0 auto;
    transform: translateX(-34%);

    .page-option {
        width: 100px;
    }

    .page-item {
        margin-left: 1em;
    }
}

.login-item {
    position: relative;
    display: inline-block;
    margin: 0 0 0 0.3rem;
}

.userInfo {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>