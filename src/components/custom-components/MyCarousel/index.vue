<template>
  <el-carousel
    :style="{ height: theHeight + 'px' }"
    :interval="theInterval"
    :autoplay="isAutoPlay"
  >
    <el-carousel-item v-for="item in carouselImgList" :key="item.id">
      <div class="imgContainer">
        <img class="imgs" :src="item.image" v-if="item.image" />
        <h3 v-else class="pictext">pic</h3>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import isCurComponent from "../../../utils/isCurComponent";
export default {
  name: "MyCarousel",
  props: {
    attrs: {
      type: Object,
      default: () => {},
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
      uploadList: [],
    };
  },
  methods: {
    updCarousel(obj) {
      if (isCurComponent(this)) {
        switch (obj.label) {
          case "图片高度":
            this.theHeight = obj.value;
            break;
          case "自动播放":
            this.isAutoPlay = obj.value;
            break;
          case "播放间隔":
            this.theInterval = obj.value * 1000;
            break;
          case "轮播图列表":
            break;
          case "图片上传":
            break;
          default:
            console.log("MyCarousel属性错误", obj.label);
        }
      }
    },
  },
  mounted() {
    this.$bus.$on("change", this.updCarousel);
    this.$bus.$on("imgUpload", (img) => {
      if (isCurComponent(this)) {
        let index = this.uploadList.indexOf(img[1]);
        let temp = this.carouselImgList[index];
        temp.image = img[0];
        this.carouselImgList.splice(index, 1, temp);
      }
    });
    this.$bus.$on("toCarousel", (value) => {
      this.uploadList.push(value);
    });
  },
  watch: {
    // carouselImgList() {
    //   console.log("轮播图改变：", this.carouselImgList);
    // },
  },
};
</script>

<style lang="scss" scoped>
.imgContainer {
  height: 100%;
  width: 100%;
  text-align: center;
  position: relative;
  .imgs {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .pictext {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
:deep(.el-carousel__button) {
  background-color: $color-theme;
}
</style>
