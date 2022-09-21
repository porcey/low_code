<template>
  <div class="root">
    <span>{{label}}</span>
    <div class="wrap">
      <div class="wrap-label">{{mValue?mOptions.trueLabel:mOptions.falseLabel}}</div>
      <el-checkbox v-model="mValue"></el-checkbox>
    </div>
  </div>
</template>

<script>
import schemaMixin from "@/mixin/schemaMixin";

export default {
  name: "SchemaSwitch",

  mixins: [schemaMixin],

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      defaultOptions: {
        trueLabel: "显示",
        falseLabel: "隐藏",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

span {
  margin-right: 2rem;
}

.wrap {
  width: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 25px;
  /*no*/

  .wrap-label {
    font-size: 14px;
    /*no*/
    line-height: 32px;
    /*no*/
  }
}
</style>