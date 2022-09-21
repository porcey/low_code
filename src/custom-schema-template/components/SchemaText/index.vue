<template>
  <div>
    <span>{{label}}</span>
    <el-input v-model="mValue" v-bind="mOptions" :placeholder='mOptions.placeholder' size='small' disabled></el-input>
  </div>
</template>

<script>
import schemaMixin from "@/mixin/schemaMixin";
export default {
  name: "SchemaText",
  mixins: [schemaMixin],
};
</script>