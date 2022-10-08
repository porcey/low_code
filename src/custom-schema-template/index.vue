/* * 生成右侧属性面板的各个组件 * */
<template>
  <ul>
    <!-- 这里的schema是当前选中元素的fields对象 -->
    <li v-for="(s, key, index) in schema" :key="index">
      <!-- s是schema中的一个元素对象（一个自定义属性），包含该属性的标签、类型、值 -->
      <!-- key是当前s的键名 -->
      <!-- <div>{{s}}<br></br>KEY!{{key}}<br></br>{{index}}</div> -->
      <!-- <div>value[key]:{{value[key]}}</div> -->
      <!-- <div>key:{{key}}</div> -->
      <!-- <div>value:{{value}}</div> -->
      <!-- <div>{{s}}</div> -->
      <component
        :key="index"
        :is="getComponents(s.type)"
        v-bind="s"
        :schema="s"
        v-model="value[key]"
      >
        <custom-schema-template
          v-if="s.child"
          :schema="s.child"
          v-bind="s.child"
          :value="value[key]"
        >
        </custom-schema-template>
      </component>
    </li>
  </ul>
</template>

<script>
export default {
  name: "custom-schema-template",

  provide() {
    return {
      mode: this,
    };
  },

  props: {
    schema: {
      typeof: Object,
      default: () => {},
    },
    value: {
      typeof: Object,
      default: () => {},
    },
    curComponent: {
      typeof: Object,
      default: () => {},
    },
  },

  methods: {
    getComponents(type) {
      // 模板字符串
      return `schema-${type}`;
    },
  },
  mounted() {
    // console.log("schma:", this.schema);
    // console.log("cur:", this.curComponent);
    // console.log("this:", this);
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
  margin-top: 1rem;
}
</style>
