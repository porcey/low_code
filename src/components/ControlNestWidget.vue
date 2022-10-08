<template>
  <div>
    <draggable
      v-model="widgetList"
      group="widget"
      animation="500"
      :class="[isWidget ? 'nest-child' : 'nest-area']"
    >
      <!-- 拖动进来的组件会被添加到widgetList中 -->
      <!-- 当前item传进widgetShape组件 :theWidget="item"-->
      <WidgetShape
        v-for="item in widgetList"
        :key="item.id"
        :theWidget="item"
        :widgets="widgetList"
      >
        <component :is="item.component" v-bind="item">
          <ControlNestWidget :isWidget="true" :widgets.sync="item.children">
          </ControlNestWidget>
        </component>
      </WidgetShape>
    </draggable>
  </div>
</template>

<script>
import WidgetShape from "./WidgetShape.vue";
import { mapState } from "vuex";
export default {
  name: "ControlNestWidget",
  provide() {
    return {
      widgetsCtrl: this,
    };
  },
  props: {
    isWidget: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      widgetList: [],
      row: false,
      column: false,
    };
  },

  components: {
    WidgetShape,
  },
  methods: {
    clearWidgets() {
      this.widgetList = [];
      this.$store.commit("CHANGECUR", null);
    },
    saveWidgets() {
      this.$bus.$emit("curWidgetList", this.widgetList);
    },
  },
  computed: {
    ...mapState(["widgetsShow"]),
  },
  mounted() {
    this.$bus.$on("deleteWidgets", this.clearWidgets),
      this.$bus.$on("savePage", this.saveWidgets),
      this.$bus.$on("changeShowPage", (value) => {
        this.widgetList = value;
      });
  },
  watch: {
    // widgetList() {
    //   console.log("新组件！", this.widgetList);
    // },
  },
};
</script>

<style scoped lang="scss">
.nest-child {
  min-height: 80px;
}

.nest-area {
  min-height: 600px;
}
</style>
