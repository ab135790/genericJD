<template>
    <div class="plr30 HomeNewExclusive">
        <div class="left">
            <img :src="require('@/assets/img/home/home_newExclusive_left.png')" alt="" class="img">
        </div>
        <div class="right">
            <img :src="require('@/assets/img/home/home_newExclusive_right.png')" alt="" class="img">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeNewExclusive'
    };
</script>

<style lang="scss" scoped>
    .HomeNewExclusive {
        display: flex;
    }
    .right,
    .left {
        width: 50%;
        height: 240px;
    }
    .img {
        width: 100%;
        height: 100%;
    }
    .left img {
        border-radius: 10px 0 0 10px;
    }
    .right img {
        border-radius: 0 10px 10px 0;
    }
</style>
