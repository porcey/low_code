<template>
  <div class="root">
    <div class="wrap-label">
      <span>属性面板</span>
    </div>
    <template v-if="curComponent">
      <custom-schema-template
        :schema="curSchema"
        v-model="curComponent"
      ></custom-schema-template>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "RightCol",
  data() {
    return {};
  },
  computed: {
    ...mapState(["curComponent"]),
    curSchema() {
      // console.log("RightCol-curSchema：", this.$fields[this.curComponent.component])
      let cur = {
        ...this.$fields[this.curComponent.component],
        id: this.curComponent.id,
      };
      // console.log("RightCol-!!!", cur);
      // 返回当前被选中组件的属性模板
      // this.curComponent.component是当前组件名，例如MyButton
      return this.$fields[this.curComponent.component];
    },
  },
  methods: {
    getNeww() {
      console.log("RightCol-curCom:", this.curComponent);
      console.log("this:", this.curSchema.value);
      // console.log("curCca:", this.curSchema);
    },
  },
};
</script>

<style scoped lang="scss">
.root {
  width: 400px;
  margin: 0 0.5rem 0 0.5rem;
  height: 100%;
  /* flex: 3; */
  background-color: white;
  font-size: 0.8rem;
}

.wrap-label {
  padding: 10px 12px;

  background: #e8f0fb;
  font-size: 14px;

  color: #323233;

  span {
    &::before {
      content: ".";
      width: 3px;

      height: 10px;

      margin-right: 8px;

      background: $color-theme;
    }
  }
}
</style>
