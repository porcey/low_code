import Vue from 'vue'

// 注册物料组件
register(require.context('../components/custom-components', true, /.vue/))
// 注册属性面板组件
register(require.context('../custom-schema-template', true, /.vue/))


function register(contexts) {
    contexts.keys().forEach(item => {
        // item是组件路径
        // contexts(item).default会返回一个组件对象，如下
        // {"name": "MyButton","props": {...},"methods": {},......}
        // console.log("global:", contexts(item));
        const component = contexts(item).default || contexts(item)
        let componentName = component.name
        Vue.component(componentName, component)
    })
}