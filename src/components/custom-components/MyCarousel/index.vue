<template>
  <el-carousel :style="{ height: theHeight+'px'}" :interval="theInterval" :autoplay="isAutoPlay">
    <el-carousel-item v-for="item in carouselImgList" :key="item.id">
      <div class="imgContainer">
        <img class="imgs" :src="item.image" />
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "MyCarousel",

  props: {
    attrs: {
      type: Object,
      default: () => { },
    },
    carouselImgList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      theHeight: this.attrs.height,
      theInterval: this.attrs.switchInterval * 1000,
      isAutoPlay: this.attrs.autoPlay,

    }
  },
  methods: {
    updCarousel(obj) {
      let myId = this.$attrs.id
      let curID = this.$store.state.curComponent.id
      if (myId === curID) {
        switch (obj.label) {
          case "图片高度":
            this.theHeight = obj.value
            break
          case "自动播放":
            this.isAutoPlay = obj.value
            break
          case "播放间隔":
            this.theInterval = obj.value * 1000
            break
          default:
            console.log("MyCarousel属性错误")
        }
      }
    }
  },
  mounted() {
    console.log("轮播图：", this.attrs);
    this.$bus.$on("change", this.updCarousel)

  }
};
</script>

<style lang="scss" scoped>
.imgContainer {
  height: 100%;
  width: 100%;

  .imgs {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>