<template>
    <div class="root">
        <div class="phone">
            <div class="panel-header"></div>
            <div class="view">
                <ControlNestWidget :widgets.sync="widgets" />
            </div>
        </div>
    </div>

</template>

<script>
import ControlNestWidget from './ControlNestWidget.vue'
import WidgetShape from './WidgetShape.vue'
export default {
    data() {
        return {
            widgets: [],
        }
    },
    components: {
        ControlNestWidget,
        WidgetShape,
    },
    watch: {
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
.root {
    width: 100%;
    height: 100%;
    flex: 1;
    background-color: rgb(243, 249, 251);
}

.phone {
    margin: 60px auto;
    width: 375px;
    height: 667px;
    background-color: white;
    border-radius: 15px;

    .panel-header {
        // border: 1px solid red;
        height: 64px;
        background-image: url("../assets/head.png");
        background-size: cover;
        // .panel-content {
        //     margin: 50px auto;
        //     background: #fff;
        //     box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.1);
        //     }
    }
}

.view {
    width: 90%;
    height: 90%;
    margin: 0 auto;
    padding-top: 10px;
}

.materialShow {
    display: block;
    min-height: 300px;
}

.box {
    flex: 1;
    height: 100px;
    background-color: white;
    text-align: center;
    line-height: 100px;
    font-size: 15px;
    border-bottom: 1px solid bisque;
}
</style>