<template>
  <div id="app" style="height: 100%;">
    <TopBar />
    <div class="main">
      <LeftCol style="height: 100%;" />
      <CenterCol />
      <RightCol />
    </div>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import LeftCol from './components/LeftCol.vue'
import CenterCol from './components/CenterCol.vue'
import RightCol from './components/RightCol.vue'
export default {
  name: 'App',
  components: {
    TopBar,
    LeftCol,
    CenterCol,
    RightCol
  },
  data() {
    return {
      curComponent: undefined,
    }
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
}

.main {
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  /* padding-top: 4px; */
  flex-direction: row;
  align-items: stretch;
  /* background-color: skyblue; */
}
</style>