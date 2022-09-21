import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import draggable from 'vuedraggable'
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store/index'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('draggable', draggable)
// console.log('drag:', draggable);

// 组件解析文件（主要用于左侧组件库）
import '@/utils/registerSchema'
// 组件名称注册
import '@/utils/globalRegister'

new Vue({
  render: h => h(App),
  store,
  // 安装全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
