<template>
    <div class="HomeScrollNews plr30">
        <div class="HomeScrollNews_content">
            <router-link to="/" class="left">
                <img :src="require('@/assets/img/home/home_scrollNews.jpg')" alt="" class="img">
            </router-link>
            <div class="center pl180 pr70">
                <van-swipe class="center_swipe" :show-indicators="false" autoplay="3000" vertical>
                    <van-swipe-item class="center_swipe_item ptb10">
                        <span class="red mr10">推荐</span>
                        学烘培其实很简单，入门工具要必备
                    </van-swipe-item>
                    <van-swipe-item class="center_swipe_item ptb10">
                        <span class="red mr10">HOT</span>
                        学烘培其实很简单，入门工具要必备
                    </van-swipe-item>
                    <van-swipe-item class="center_swipe_item ptb10">
                        <span class="red mr10">新品</span>
                        学烘培其实很简单，入门工具要必备
                    </van-swipe-item>
                    <van-swipe-item class="center_swipe_item ptb10">
                        <span class="red mr10">热门</span>
                        学烘培其实很简单，入门工具要必备入门工具要必备
                    </van-swipe-item>
                </van-swipe>
            </div>
            <router-link to="/" class="right">
                更多
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeScrollNews'
    };
</script>

<style lang="scss" scoped>
    @import '@/assets/css/_mixins.scss';
    .HomeScrollNews {
        &_content {
            height: 60px;
            position: relative;
            background: $bgc-fff;
            border-radius: 12px;
            overflow: hidden;
            .left {
                position: absolute;
                left: 16px;
                top: 14px;
                .img {
                    width: 152px;
                    height: 30px;
                }
            }
            .center {
                width:100%;
                height: 60px;
                &_swipe {
                    height: 60px;
                    &_item {
                        @include ellipsis();
                        height: 60px;
                        line-height: 46px;
                        width:100%;
                        font-size: 24px;
                    }
                }
            }
            .right {
                position: absolute;
                right: 16px;
                top: 18px;
                font-size: 24px;
                color: $coloe_333;
                &:after {
                    content: '';
                    position: relative;
                    left: 0;
                    top: 0;
                    width: 1px;
                    height: 100%;
                    background: rgba(204, 204, 204, .2);
                }
            }
            .red {
                color: $color_e93b3d;
            }
        }
    }
</style>
