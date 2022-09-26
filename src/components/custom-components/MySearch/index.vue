<template>
  <div class="search">
    <div class="search-body" :style="getSourceStyle()">
      <span class="">{{ value.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MySearch',

  props: {
    styles: {
      type: Object,
      default: () => { }
    },
    value: {
      type: Object,
      default: () => { }
    }
  },
  mounted() {
    this.$bus.$on("change", this.updSearch)
  },

  methods: {
    // 搜索框样式
    getSourceStyle() {
      let temp = {}
      console.log(this.styles);
      if (this.styles.shape == 'circular') temp.borderRadius = '25px';
      if (this.styles.location == 'center') temp.justifyContent = 'center';
      temp.backgroundColor = `${this.styles.cmpBackground}`;
      temp.color = `${this.styles.cmpFontColor}`;
      return temp;
    },
    updSearch(obj) {
      let myId = this.$attrs.id
      let curID = this.$store.state.curComponent.id
      if (myId === curID) {
        switch (obj.label) {
          case "搜索文本":
            this.value.text = obj.value
            break
          case "形状":
            this.styles.shape = obj.value
            break
          case "文本位置":
            this.styles.location = obj.value
            break
          case "文字颜色":
            this.styles.cmpFontColor = obj.value
            break
          case "背景色":
            this.styles.cmpBackground = obj.value
            break
          default:
            console.log("MySearch属性错误")
        }
      }
      this.getSourceStyle()
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  padding: 8px 12px;

  .search-body {
    display: flex;
    align-items: center;
    padding: 0 10px;
    width: 94%;
    height: 34px;
    background: #fff;
    font-size: 14px;
    color: #969799;
  }
}
</style>

