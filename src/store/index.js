import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {}

const mutations = {
    // 修改当前选中的组件
    CHANGECUR(state, value) {
        state.curComponent = value
    },
    // 新建页面
    PUSHPAGE(state, value) {
        state.pages.push(value)
        console.log("压入页面！", state.pages);
    },
    UPDATEPAGE(state, value) {
        state.pages[value.index].widgets = value.w
        console.log("获取页面组件了！", state.pages);
    },
    DELPAGE(state, value) {
        state.pages.splice(value, 1)
    }
}

const state = {
    // 当前选中的组件
    curComponent: undefined,
    panelSize: [375, 667], // 画布大小
    pages: [],
    curPage: 0,
    isPreview: false, // 是否处于预览状态,
    userInfo: {} //个人信息
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})