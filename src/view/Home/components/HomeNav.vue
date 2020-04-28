<template>
    <van-swipe class="homeNavSwipe" indicator-color="#e93b3d">
        <van-swipe-item v-for="(page, index) of swiperData" :key="'img' + index" class="swiperItem pb20">
            <router-link tag="div" to="/" class="swiperItem_link " v-for="(img, index) in page" :key="'img' + index">
                <div class="swiperItem_link_img mtb20">
                    <img :src="img.picUrl" alt="" class="img">
                </div>
                <div class="swiperItem_link_txt">{{img.name}}</div>
            </router-link>
        </van-swipe-item>
    </van-swipe>
</template>

<script>
    import Vue from 'vue';
    import { Swipe, SwipeItem } from 'vant';
    import { navArr } from '../config.js';
    Vue.use(Swipe).use(SwipeItem);
    export default {
        name: 'HomeNav',
        data() {
            return {
                navData: navArr
            };
        },
        computed: {
            swiperData() {
                const pages = [];
                this.navData.forEach((item, index) => {
                    const page = Math.floor(index / 10);
                    if (!pages[page]) {
                        pages[page] = [];
                    }
                    pages[page].push(item);
                });
                return pages;
            }
        }
    };
</script>
<style>
    .homeNavSwipe .van-swipe__indicators {
        bottom: 0;
    }
    .homeNavSwipe .van-swipe__indicator {
        background: #666;
    }
</style>
<style lang="scss" scoped>
    @import '~@/assets/css/_mixins.scss';
    .homeNavSwipe {
        .swiperItem {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            &_link {
                width: 20%;
                display: flex;
                flex-direction: column;
                align-items: center;
                &_img {
                    position: relative;
                    overflow: hidden;
                    width: 50%;
                    padding-top: 50%;
                    .img {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                    }
                }
                &_txt {
                    font-size: 24px;
                    color: $color_666;
                }
            }
        }
    }
</style>
