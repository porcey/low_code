<template>
  <div class="root">
    <span>{{label}}</span>
    <el-color-picker v-model="mValue" :predefine="predefineColors" v-bind="mOptions" show-alpha></el-color-picker>
  </div>
</template>

<script>
import schemaMixin from "@/mixin/schemaMixin";


export default {
  name: "SchemaColor",

  mixins: [schemaMixin],

  components: {

  },

  data() {
    return {
      mValue: "",
      predefineColors: [
        "#ffffff",
        "#f5f5f5f5",
        "#F2F2F2",
        "#FF4444",
        "#FFCD00",
        "#3FBC87",
        "#5197FF",
        "#BADCFF",
        "#000000",
      ],
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue, oldValue) {
        this.mValue = newValue;
      },
    },
  },

};
</script>
<style scoped>
.root {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

span {
  width: 60px;
  margin-right: 2rem;
}

.el-color-picker {
  width: 60px;
}

/* .colorBox {
  display: inline-block;
} */
</style>