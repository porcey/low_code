<template>
  <div class="root">
    <span @click="getNew" class="demonstration">{{label}}</span>
    <el-slider v-model="mValue" v-bind="mOptions" show-input>
    </el-slider>
  </div>
</template>

<script>
import schemaMixin from "@/mixin/schemaMixin";

export default {
  name: "SchemaNumber",

  mixins: [schemaMixin],

  data() {
    return {
      defaultOptions: {
        max: 100,
      },
    };
  },
  methods: {
    getNew() {
      console.log("nEW:", this);
    }
  }
};
</script>
<style scoped>
.root {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
}

span {
  margin-right: 2rem;
}

.el-slider {
  display: inline-block;
  width: 70%;
}
</style>
