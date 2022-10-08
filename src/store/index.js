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
    },
    UPDATEPAGE(state, value) {
        state.pages[value.index].widgets = value.w
    },
    DELPAGE(state, value) {
        state.pages.splice(value, 1)
    },
    CHANGE_CHOSEN(state, value) {
        state.isChosen = value
    }
}

const state = {
    // 当前选中的组件
    curComponent: undefined,
    panelSize: [375, 667], // 画布大小
    pages: [],
    curPage: 0,
    isPreview: false, // 是否处于预览状态,
    userInfo: {}, //个人信息
    isChosen: false, // 用于widgetShape组件，实现点击其他地方组件失焦
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})