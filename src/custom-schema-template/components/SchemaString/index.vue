<template>
  <div class="root">
    <span>{{label}}</span>
    <el-input v-model="mValue" v-bind="mOptions" :placeholder='mOptions.placeholder' size='small'></el-input>
  </div>
</template>

<script>
import schemaMixin from "@/mixin/schemaMixin";
export default {
  name: "SchemaString",
  mixins: [schemaMixin],
  props: ['label'],
  methods: {
    getInfo() {
      console.log('id：', this.mValue);
    }
  }
};
</script>
<style scoped>
.root {
  display: flex;
  padding-left: 20px;
  justify-content: space-between;
  align-items: center;
}

span {
  margin-right: 20px;
}

.el-input {
  width: 200px;
  flex: 1;
}
</style>