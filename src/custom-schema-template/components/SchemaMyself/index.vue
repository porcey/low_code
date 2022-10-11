<template>
  <div>
    <div class="skills">
      <ul>
        <li>
          熟悉 HTML ，CSS 和 Javascript ，了解 ES6
          新特性，JS原型、闭包、防抖节流等
        </li>
        <li>
          熟悉 Vue
          框架的基本使用，能独立进行项目开发，对Vue有一定的了解，例如虚拟Dom、Di
          ff算法、响应式原理，以及Vue3的技术更新等
        </li>
        <li>熟练掌握Photoshop，能独立设计网页、小程序原型以及海报、logo等</li>
        <li>了解 HTTP 、浏览器缓存与浏览器的渲染机制等相关知识</li>
        <li>
          了解 Element-UI 与 Scss 预编译语言，能够使用 Git
          进行版本管理，团队配合意识良好
        </li>
      </ul>
    </div>
    <div class="project"></div>
  </div>
</template>

<script>
export default {
  name: "SchemaMyself",
};
</script>

<style scoped lang="scss">
.skills {
  font-size: 18px;

  ul {
    margin: 10px;
    margin-left: 35px;

    li {
      margin-bottom: 20px;
    }
  }
}
</style>
