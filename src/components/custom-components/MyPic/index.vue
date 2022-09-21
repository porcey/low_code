<template>
    <div class="imgContainer">
        <img class="img" :src="imagePath || defaultImage"
            :style="{ borderRadius: picRadius + 'px', height: picHeight + 'px' }" />
    </div>
</template>
  
<script>
export default {
    name: "MyPic",

    props: {
        imagePath: {
            type: String,
            default: "",
        },
        radius: {
            type: Number,
            default: 0,
        },
        height: {
            type: Number,
            default: 100,
        },
    },

    data() {
        return {
            defaultImage:
                "https://img01.yzcdn.cn/public_files/2019/03/05/2b60ed750a93a1bd6e17fc354c86fa78.png!large.webp",
            picRadius: this.radius,
            picHeight: this.height
        };
    },
    methods: {
        updPic(obj) {
            let myId = this.$attrs.id
            let curID = this.$store.state.curComponent.id
            if (myId === curID) {
                switch (obj.label) {
                    case "图片圆角":
                        this.picRadius = obj.value
                        break
                    case "图片高度":
                        this.picHeight = obj.value
                        break
                    default:
                        console.log("MyPic属性错误")
                }
            }

        }
    },
    mounted() {
        this.$bus.$on("change", this.updPic)
    }
};
</script>
  
<style lang="scss" scoped>
.imgContainer {
    overflow: hidden;

    .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
  