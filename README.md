# low_code

## 项目文件结构
├─node_modules
├─public
└─src
    ├─assets
    ├─components
    │  └─custom-components	// 自定义物料组件
    │  └─TopBar.vue		// 页面顶部菜单栏
    │  └─LeftCol.vue	// 页面左侧物料区
    │  └─CenterCol.vue	// 页面中间展示区
    │  └─RightCOl.vue	// 页面右侧组件属性配置区
    │  └─ControlNestWidget.vue	// 中间展示区遍历生成物料组件
    │  └─WidgetShape.vue		// 生成的物料组件工具栏
    ├─custom-schema-template	
    │  └─components	// 属性配置组件
    │  └─index.vue	// 遍历生成右侧属性配置组件
    ├─mixin	// 属性配置组件的统一配置项
    ├─router
    ├─scss
    ├─store
    └─utils
    │  └─globalRegister.js	// 物料组件与属性配置组件的自动注册
	│  └─registerSchema.js	// 对描述物料组件的JSON文件进行处理
