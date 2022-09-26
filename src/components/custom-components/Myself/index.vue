<template>
    <div class="myself">
        <div class="content">
            <ul>
                <li>
                    <b>姓名：</b>许洁
                </li>
                <li><b>学校：</b>合肥工业大学</li>
                <li><b>专业：</b>计算机科学与技术</li>
                <li><b>求职意向：</b>前端开发</li>
            </ul>
        </div>
        <div class="pic">
            <img src="../../../../public/myself.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Myself'
}
</script>

<style lang="scss" scoped>
.myself {
    width: 100%;
    height: 125px;
    display: flex;
    flex-direction: row;


    .content {
        flex: 2;

        ul {
            margin: 10px;
        }

        li {
            list-style: none;
            margin-bottom: 5px;
        }
    }

    .pic {
        flex: 1;
        border: 1px solid rgb(201, 225, 244);

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>