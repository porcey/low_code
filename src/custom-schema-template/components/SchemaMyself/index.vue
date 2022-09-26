<template>
    <div>
        <div class="skills">
            <ul>
                <li>熟悉HTML，CSS和Javascript</li>
                <li>熟悉JavaScript原型、原型链、闭包、防抖节流等，了解ES6新特性</li>
                <li>熟悉Vue技术栈及其生态（vue-router,vux,vue-cli等），能够独立使用Vue2进行项目开发</li>
                <li>了解Vue2.X原理（虚拟DOM，diff算法，AST，响应式原理）以及vue3的技术更新</li>
                <li>了解并会使用Element-UI与Scss预编译语言</li>
                <li>了解http、浏览器缓存与浏览器的渲染机制</li>
                <li>了解并会使用Git进行版本管理，团队配合意识良好</li>
            </ul>
        </div>
        <div class="project"></div>
    </div>
</template>

<script>
export default {
    name: "SchemaMyself",
}
</script>

<style scoped lang="scss">
.skills {
    font-size: 18px;

    ul {
        margin: 10px;
        margin-left: 30px;

        li {
            margin-bottom: 20px;
        }
    }
}
</style>