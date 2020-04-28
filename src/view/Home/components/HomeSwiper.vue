<template>
    <div>
        <van-swipe class="homeSwipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(img, index) of swiperData" :key="'img' + index">
                <router-link to="/" class="homeSwipe_link ">
                    <img v-lazy="img.imgUrl" alt="" class="img">
                </router-link>
            </van-swipe-item>
        </van-swipe>
        <div class="homeSwipe_bg"></div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Swipe, SwipeItem, Lazyload } from 'vant';
    import { imgArr } from '../config.js';
    Vue.use(Swipe).use(SwipeItem).use(Lazyload);
    export default {
        name: 'HomeSwiper',
        data() {
            return {
                swiperData: imgArr
            };
        }
    };
</script>

<style lang="scss" scoped>
    @import '@/assets/css/_mixins.scss';
    .homeSwipe {
        position: relative;
        height: 380px;
        z-index: $swiper_index;
        &_link {
            display: block;
            width: calc(100% - 50px);
            height: 280px;
            margin: 0 auto;
            top: 90px;
            position: relative;
            border-radius: 15px;
            .img {
                border-radius: 15px;
                width: 100%;
                height: 100%;
            }
        }
    }
    .homeSwipe_bg {
        background-image: linear-gradient(0deg, #f1503b, $bgc-theme 50%);
        position: absolute;
        top: 0;
        left: -25%;
        height: 290px;
        width: 150%;
        border-bottom-left-radius: 100%;
        border-bottom-right-radius: 100%;
    }
</style>
