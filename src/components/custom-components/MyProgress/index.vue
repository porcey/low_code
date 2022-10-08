<template>
  <div>
    <el-progress
      :text-inside="true"
      :stroke-width="theHeight"
      :percentage="percentage"
      :color="color"
      :type="type"
    ></el-progress>
  </div>
</template>

<script>
import isCurComponent from "../../../utils/isCurComponent";

export default {
  name: "MyProgress",
  data() {
    return {
      percentage: 30,
      theHeight: 20,
      color: "",
      type: "line",
    };
  },
  methods: {
    updProgress(obj) {
      if (isCurComponent(this)) {
        switch (obj.label) {
          case "百分比":
            this.percentage = obj.value;
            break;
          case "高度":
            this.theHeight = obj.value;
            break;
          case "颜色":
            this.color = obj.value;
            break;
          case "进度条类型":
            this.type = obj.value;
            break;
          default:
            console.log("MyProgress属性错误", label);
        }
      }
    },
  },
  mounted() {
    this.$bus.$on("change", this.updProgress);
  },
};
</script>

<style lang="scss" scoped></style>
