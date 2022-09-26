<template>
  <div class="cnt">
    <div class="cnt-body" ref="nestParent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "RowContainer",
  data() {
    return {
      theBoxShadow: true,
      theBackground: ''
    }
  },
  props: {
    margin: {
      type: Object,
      default: {},
    },
    padding: {
      type: Object,
      default: {},
    },
    gap: {
      type: Number,
      default: 10,
    },
  },
  mounted() {
    this.updateStyles();
    this.$bus.$emit('rowContainer', true)
    this.$bus.$on("change", this.updRowCon)
  },
  computed: {
    // 主标题样式
    getTitleStyle() {
      return {
        background: this.theBackground,
        gap: this.gap + "px",
        margin: `${this.margin.u}px ${this.margin.r}px ${this.margin.d}px ${this.margin.l}px`,
        padding: `${this.padding.y}px ${this.padding.x}px`,
        boxShadow: `${this.theBoxShadow === true
          ? "0 4px 6px 0 rgba(12, 31, 80, 0.14)"
          : "none"
          } `,
      };
    },
  },
  methods: {
    updateStyles() {
      const el = this.$refs.nestParent.childNodes[0];
      Object.assign(el.style, this.getTitleStyle);
      el.childNodes[0].style.display = 'flex'
    },
    updRowCon(obj) {
      let myId = this.$attrs.id
      let curID = this.$store.state.curComponent.id
      if (myId === curID) {
        switch (obj.label) {
          case "上":
            this.margin.u = obj.value
            break
          case "下":
            this.margin.d = obj.value
            break
          case "左":
            this.margin.l = obj.value
            break
          case "右":
            this.margin.r = obj.value
            break
          case "上下":
            this.padding.y = obj.value
            break
          case "左右":
            this.padding.x = obj.value
            break
          case "阴影":
            this.theBoxShadow = obj.value
            break
          case "背景颜色":
            this.theBackground = obj.value
            break
          default:
            console.log("MyRowContainer属性错误")
        }
        this.updateStyles()
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.nest-child {
  display: flex;
  flex-direction: row;
  background-color: pink;
}
</style>
