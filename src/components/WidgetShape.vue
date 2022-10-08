<template>
  <div id="root" @click.stop="widgetChosen">
    <!-- 点击高亮 -->
    <div v-if="isCurComponent(theWidget.id)" class="box-solid"></div>
    <div class="box-dashed"></div>

    <!-- 组件工具栏 -->
    <div v-if="isCurComponent(theWidget.id)" class="box-tab">
      <template>
        <i
          class="copy el-icon-document-copy"
          @click.stop="copyWidegt(theWidget.id)"
        ></i>
        <i
          class="del el-icon-delete-solid"
          @click.stop="delWidegt(theWidget.id)"
        ></i>
      </template>
    </div>
    <!-- 子组件插槽 -->
    <slot></slot>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapMutations, mapState } from "vuex";
import { cloneDeep } from "lodash";

export default {
  inject: ["widgetsCtrl"],
  props: {
    // 接收由ControlNestWidget传递的当前组件
    theWidget: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      //   isChosen: false,
    };
  },
  computed: {
    // 引入Vuex管理的state
    ...mapState(["curComponent", "isChosen"]),
    // 当前显示区的组件列表
    widegtShow() {
      return this.widgetsCtrl.widgetList;
    },
  },
  methods: {
    ...mapMutations(["CHANGECUR", "CHANGE_CHOSEN"]),
    widgetChosen() {
      //   this.$store.commit("CHANGECUR", this.theWidget);
      this.CHANGECUR(this.theWidget);
      //   this.CHANGE_CHOSEN(true);
      //   this.isChosen = true;
    },
    isCurComponent(id) {
      // 该方法实现一次只有一个组件被选中，只有一个组件边框高亮
      return this.curComponent?.id == id;
    },
    copyWidegt(id) {
      for (let i of this.widegtShow) {
        if (i.id === id) {
          let newWidget = {
            ...cloneDeep(i),
            id: nanoid(),
          };
          this.widegtShow.push(newWidget);
        }
      }
    },
    delWidegt(id) {
      for (let i of this.widegtShow) {
        if (i.id === id) {
          let index = this.widegtShow.indexOf(i);
          this.widegtShow.splice(index, 1);
        }
      }
      this.$store.commit("CHANGECUR", null);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  box-sizing: border-box;
}

#root {
  position: relative;

  & {
    border: transparent 1px solid;
  }

  &:hover > .box-dashed {
    display: block;
  }

  .box-solid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px $color-theme;
    z-index: 1;
    pointer-events: none;
  }

  .box-dashed {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: dashed 1px $color-theme;
    z-index: 1;
    pointer-events: none;
  }

  .box-tab {
    position: absolute;
    top: 0;
    right: -40%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 30px;
    font-size: 16px;
    background-color: white;
    color: #333;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 100;

    // 工具栏的装饰小三角
    &::after {
      content: "";
      position: absolute;
      right: 100%;
      top: 7px;

      border: {
        width: 5px;
        style: solid;
        color: transparent;
        right-width: 5px;
        right-color: currentColor;
      }

      margin-bottom: -1px;
      color: white;
    }

    .del {
      cursor: pointer;
    }

    .copy {
      padding-right: 1.2rem;
      cursor: pointer;
    }
  }
}

i {
  font-style: normal;
}
</style>
