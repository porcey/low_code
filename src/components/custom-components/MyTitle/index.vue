<template>
  <div class="title">
    <div :class="[theModel == 'center' ? 'title-mid-model' : 'title-left-model']">
      <!-- 主标题 -->
      <div class="title" :style="getTitleStyle()">
        {{ theTitle }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTitle",
  data() {
    return {
      theTitle: this.title,
      theModel: this.model
    }
  },
  props: {
    title: String,
    model: {
      type: String,
      default: "center",
    },
    styles: {
      type: Object,
      default: () => { },
    },
  },

  methods: {
    // 主标题样式
    getTitleStyle() {
      return {
        color: this.styles.titleColor,
        fontSize: this.styles.titleSize + "px",
      };
    },
    updTitle(obj) {
      let myId = this.$attrs.id
      let curID = this.$store.state.curComponent.id
      if (myId === curID) {
        switch (obj.label) {
          case "标题":
            this.theTitle = obj.value
            break
          case "布局选择":
            this.theModel = obj.value
            break
          case "标题字号":
            this.styles.titleSize = obj.value
            break
          case "文字颜色":
            this.styles.titleColor = obj.value
            break
          default:
            console.log("MyTtile属性错误")
        }
      }
    }
  },
  mounted() {
    this.$bus.$on("change", this.updTitle)
  }
};
</script>

<style lang="scss" scoped>
.title {
  .title-left-model {
    display: flex;
    align-items: flex-end;
    padding-left: 10px;
    padding-right: 10px;
  }

  .title-mid-model {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
