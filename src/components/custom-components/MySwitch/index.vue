<template>
  <div>
    <el-switch
      v-model="switchControl"
      :active-color="openColor"
      :inactive-color="closeColor"
    >
    </el-switch>
  </div>
</template>

<script>
import isCurComponent from "../../../utils/isCurComponent";

export default {
  name: "MySwitch",
  data() {
    return {
      openColor: "#13ce66",
      closeColor: "#ff4949",
      switchControl: true,
    };
  },
  methods: {
    updSwitch(obj) {
      if (isCurComponent(this)) {
        switch (obj.label) {
          case "开启颜色":
            this.openColor = obj.value;
            break;
          case "关闭颜色":
            this.closeColor = obj.value;
            break;
          default:
            console.log("MySwitch属性错误", obj.label);
        }
      }
      this.switchControl = !this.switchControl;
    },
  },
  mounted() {
    this.$bus.$on("change", this.updSwitch);
  },
};
</script>

<style lang="scss" scoped>
// :deep(.el-switch__core) {
//   width: 300px !important;
//   height: 80px;
// }
</style>
