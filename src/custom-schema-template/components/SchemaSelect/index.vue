<template>
  <div class="select" :class="[direction=='column' ? 'flex-column' : '']">
    <ul class="select-label" :class="[direction=='column' ? 'mb15' : '']">
      <li class="select-label-text">{{label}}</li>
    </ul>

    <div class="select-body">
      <select-item v-for="(item,index) in data" v-bind="item"></select-item>
    </div>

  </div>
</template>

<script>
import schemaMixin from "@/mixin/schemaMixin";
import SelectItem from "./SelectItem";

export default {
  name: "SchemaSelect",

  components: {
    SelectItem,
  },

  mixins: [schemaMixin],

  provide() {
    return {
      mode: this,
    };
  },

  props: {
    value: {
      default: 0,
    },
    data: {
      type: Array,
    },
  },

  computed: {
    direction() {
      return this.data.length > 3 ? "column" : "row";
    },
  },

  methods: {
    getLabel(value) {
      return this.data.find((v) => v.value == value)?.label || "暂无匹配";
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}

.select {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  padding-left: 20px;
  background: #fff;

  .select-label {
    display: flex;
    align-items: center;

    .select-label-text {
      width: 70px;
      color: #969799;
      font-size: 13px;
    }
  }

  .select-body {
    display: flex;
    flex-wrap: wrap;
  }
}

.mode-select {
  display: flex;
  justify-content: space-between;

  .mode-select-label {
    font-size: 14px;
    /*no*/
    line-height: 32px;
    /*no*/
  }

  .mode-select-body {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>