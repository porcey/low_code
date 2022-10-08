<template>
  <div :title="label">
    <div class="mb10 f-grey f12">{{ mOptions.note }}</div>
    <div class="nav">
      <!-- 编译模式,插槽可供自定义拖拽组件入容器 -->
      <slot v-if="edit"></slot>

      <!-- 非编译模式，根据schema子类遍历数组单项组件 -->
      <template v-else>
        <div v-for="(item, index) in mValue" :key="item.id" class="nav-item">
          <component
            v-for="(val, key, index) in schema.child"
            :key="index"
            :is="getComponents(val.type)"
            v-model="item[key]"
            v-bind="val"
          >
          </component>
          <div class="nav-delete" @click="delItem(index)">x</div>
        </div>
      </template>
      <div class="add">
        <el-input v-model="newItem" v-if="widgetTypes()"></el-input>
        <el-button @click="addItem">添加选项</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import schemaMixin from "@/mixin/schemaMixin";
import { nanoid } from "nanoid";

export default {
  name: "SchemaArray",

  mixins: [schemaMixin],
  data() {
    return {
      newItem: "",
      widgetType: false,
    };
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    edit: {
      type: Boolean,
      default: false,
    },
    schema: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    getComponents(type) {
      return `schema-${type}`;
    },
    addItem() {
      if (this.mValue.length >= this.mOptions?.limit) {
        this.$notify({
          title: "无法新增",
          message: `最多只能添加${this.mOptions?.limit}条数据`,
          type: "warning",
        });
        return;
      }

      this.mValue.push({
        value: nanoid() + "",
        text: this.newItem,
      });
    },

    delItem(i) {
      console.log(i);
      console.log(this.mValue);
      this.mValue.splice(i, 1);
    },
    widgetTypes() {
      if (this.schema.label.includes("选择器")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .config-item {
  margin-bottom: 10px !important;
}

.nav-item {
  display: flex;
  align-items: center;
  padding-bottom: 10px;

  .nav-delete {
    font-size: 15px;
    cursor: pointer;
    padding-left: 20px;
  }
}
.add {
  display: flex;
  .el-input {
    width: 250px;
    height: 32px;
    padding-left: 20px;
  }
  .el-button {
    margin-left: 10px;
  }
}
</style>
