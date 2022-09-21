import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {}

const mutations = {
    // 修改当前选中的组件
    CHANGECUR(state, value) {
        state.curComponent = value
    },
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