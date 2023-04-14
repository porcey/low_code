/*
 * @Description: 对物料组件的描述文件component.json进行处理
 * 生成一个fields对象集合（一个组件一个对象，内容是其自定义属性[fields中的内容]）
 * 生成一个initializing数组，包含每个对象的属性名（深度为一层对象）
 * 将上述两个变量挂载到vue原型上
 */
import Vue from 'vue'

registerComponentsSchema()

function registerComponentsSchema() {
    // 路径 是否检索子文件夹 文件名
    const files = require.context('../components/custom-components', true, /component.json$/)
    // console.log('files:');

    // 物料属性描述对象 （使用object类型方便调用）
    // 物料对象属性域 集合了所有物料对象的特殊属性
    let fields = {}
    // 物料初始化数据集合
    let initializing = []

    // files.keys()得到装有组件描述文件路径的数组
    files.keys().forEach(key => {
        // key.split('/')分割路径，去除‘/’
        // [, name]解构赋值 将分割后数组的第二个值赋给变量num
        const [, name] = key.split('/')
        let config = { component: name, ...files(key) }
        // console.log(files(key));

        fields[name] = config.fields
        // console.log(fields);
        initializing.push(initDefaulValue(config))
    })
    // initializing中挂载的是属性名（深度为一层对象）
    Vue.prototype.$initializing = initializing
    // console.log(initializing);
    // fields中挂载的是组件描述中fields的详细内容（例如上面对象的详细内容）
    Vue.prototype.$fields = fields
    // console.log(fields);
}

// 初始化组件初始数据
function initDefaulValue(config) {
    let { component, name, icon, fields } = config
    let temp = { component, name, icon }
    setDefaultValue(fields, temp)
    return temp
}

// 递归设置各层级初始数据
function setDefaultValue(fields, initializing) {
    for (let key in fields) {
        // child是子组件 我猜
        let { type, value, child } = fields[key]
        if (type == 'object') {
            initializing[key] = {}
            child && setDefaultValue(fields[key].child, initializing[key])
        } else {
            initializing[key] = value
        }
    }
    return initializing
}
