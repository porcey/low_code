<template>
  <div class="title">
    <!-- <el-button type="primary" @click="getMe" ref="btn">{{buttonContent}}</el-button> -->
    <el-button :style="{
      '--bgcColor': buttonStyles.bgColor
        ? buttonStyles.bgColor
        : 'rgba(81, 151, 255, 1)',
      '--titleColor': buttonStyles.titleColor
        ? buttonStyles.titleColor
        : 'rgba(242, 242, 242, 1)',
      '--borderColor': buttonStyles.bdColor ? buttonStyles.bdColor : '#DCDFE6',
      '--titleSize': buttonStyles.titleSize + 'px',
      '--paddingLeft': buttonStyles.paddingLeft + 'px',
      '--paddingTop': buttonStyles.paddingTop + 'px',
      '--borderWidth': buttonStyles.borderWidth + 'px',
    }" @click="getMe">{{ btnTittle }}</el-button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "MyButton",
  props: {
    buttonTitle: {
      type: String,
      default: () => { },
    },
    buttonModel: {
      type: String,
      default: () => { },
    },
    buttonFree: {
      type: Number,
      default: () => { },
    },
    buttonStyles: {
      type: Object,
      default: () => { }
    },
  },
  data() {
    return {
      btnTittle: this.buttonTitle,
    }
  },
  methods: {
    getMe() {
      console.log(this);
    },
    // 更新按钮信息
    updBtn(obj) {
      // this.$attrs.id 是组件的个人id，this.curComponent.id是当前被激活组件的id
      let myId = this.$attrs.id
      let curID = this.curComponent.id
      // 防止同类组件同时响应
      if (myId === curID) {
        switch (obj.label) {
          case "左右边距":
            this.buttonStyles.paddingLeft = obj.value
            break
          case "上下边距":
            this.buttonStyles.paddingTop = obj.value
            break
          case "文字":
            this.btnTittle = obj.value
            break
          case "文字颜色":
            this.buttonStyles.titleColor = obj.value
            break
          case "边框宽度":
            this.buttonStyles.borderWidth = obj.value
            break
          case "背景颜色":
            this.buttonStyles.bgColor = obj.value
            break
          case "边框颜色":
            this.buttonStyles.bdColor = obj.value
            break
          default:
            console.log("MyButton属性错误")
        }
      }

    },
  },
  computed: {
    ...mapState(['curComponent']),
  },
  mounted() {
    this.$bus.$on('change', this.updBtn)
  },
  watch: {

  }
}
</script>

<style lang="scss" scoped>
.el-button {
  position: relative;
  background-color: var(--bgcColor);
  color: var(--titleColor);
  font-size: var(--titleSize);
  padding-top: var(--paddingTop);
  padding-left: var(--paddingLeft);
  padding-bottom: var(--paddingTop);
  padding-right: var(--paddingLeft);
  border-color: var(--borderColor);
  border-width: var(--borderWidth);
}
</style>
