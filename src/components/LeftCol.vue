<template>
  <div class="root">
    <div class="wrap-label">
      <span>物料列表</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :default-openeds="['1', '2']"
    >
      <el-submenu index="1">
        <template slot="title">
          <h3 style="color: #155bd4">容器组件</h3>
        </template>
        <el-menu-item-group>
          <draggable
            v-model="containers"
            :options="{
              group: {
                name: 'widget',
                pull: 'clone',
                put: 'false',
              },
              sort: false,
            }"
            animation="300"
            :clone="activeClone"
          >
            <transition-group class="material">
              <div
                v-for="(item, index) in containers"
                :key="index"
                class="box"
                :icon="item"
              >
                {{ item.name }}
                <span :class="item.icon"></span>
              </div>
            </transition-group>
          </draggable>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <h3 style="color: #155bd4">基础组件</h3>
        </template>
        <el-menu-item-group>
          <draggable
            v-model="basicWidgets"
            :options="{
              group: {
                name: 'widget',
                pull: 'clone',
                put: 'false',
              },
              sort: false,
            }"
            animation="300"
            :clone="activeClone"
          >
            <transition-group class="material">
              <div
                v-for="(item, index) in basicWidgets"
                :key="index"
                :class="getClass(item.name)"
                :icon="item"
              >
                {{ item.name }}
                <span :class="item.icon"></span>
              </div>
            </transition-group>
          </draggable>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { cloneDeep } from "lodash";
export default {
  data() {
    return {
      widgets: [],
      nest: [],
      activeClone(model) {
        // 克隆组件触发事件'activeClone',将克隆的组件加上id属性传递过去
        return {
          ...cloneDeep(model),
          id: nanoid(),
        };
      },
      containers: [], // 容器组件列表
      basicWidgets: [], // 基础组件列表
    };
  },
  methods: {
    getClass(itemName) {
      if (itemName === "许洁") {
        return "box xj";
      } else {
        return "box";
      }
    },
    // 组件分类：容器组件、基础组件
    widgetsClassify() {
      this.$initializing.forEach((item) => {
        if (item.component.includes("Container")) {
          this.containers.push(item);
        } else {
          this.basicWidgets.push(item);
        }
      });
    },
  },
  mounted() {
    this.widgetsClassify();
  },
};
</script>

<style scoped lang="scss">
.root {
  height: 100%;
  width: 200px;
}
:deep(.el-menu-item-group__title) {
  padding: 0 !important;
}
.material {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .box {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 100px;
    background-color: white;
    text-align: center;
    line-height: 75px;
    font-size: 15px;
    span {
      transform: translateY(-15px);
    }
  }

  .xj {
    position: relative;
    box-sizing: border-box;
    border: 5px solid pink;
  }

  // .xj::before {
  //   content: "";
  //   position: absolute;
  //   top: 60px;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   width: 70px;
  //   height: 10px;
  //   background-color: rgb(255, 229, 233);
  //   border-radius: 5px;
  //   z-index: 1;
  // }

  .box:hover {
    background-color: skyblue;
  }
}

.nest {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: pink;
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
