<template>
    <van-sticky @scroll="onscroll">
        <div class="header" :class="{isScroll: addBgColor}">
            <div @click="toRouter" class="header_menu">
                <img :src="require('@/assets/img/home/home_menu.png')" alt="" class="img">
            </div>
            <div class="header_search plr20">
                <img :src="require('@/assets/img/JD.png')" alt="" class="img">
                <van-icon name="search" class="iconSearch plr20"/>
                <span class="header_search_txt">神舟笔记本</span>
            </div>
            <div class="header_login" @click="toLogin">登录</div>
        </div>
    </van-sticky>
</template>

<script>
    import Vue from 'vue';
    import { Sticky, Search, Icon } from 'vant';
    Vue.use(Sticky).use(Search).use(Icon);
    export default {
        name: 'HomeHeader',
        data() {
            return {
                addBgColor: false //  是否添加背景色
            };
        },
        methods: {
            /** 2020/4/24
             * 作者： 王青高
             * 功能： 跳转分类页面
             * 参数： NULL
             * 返回值： NULL
             */
            toRouter() {

            },
            /** 2020/4/24
             * 作者： 王青高
             * 功能： 跳转登录界面
             * 参数： NULL
             * 返回值： NULL
             */
            toLogin() {

            },
            /** 2020/4/24
            * 作者： 王青高
            * 功能： 监听滚动
            * 参数： NULL
            * 返回值： NULL
            */
            onscroll(values) {
                if (document.body.scrollTop > 0) {
                    this.addBgColor = true;
                } else if (document.body.scrollTop <= 0) {
                    this.addBgColor = false;
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '@/assets/css/_mixins.scss';
    .header {
        display: flex;
        align-items: center;
        height: 88px;
        background: transparent;
        &_menu {
            width: 15%;
            @include flex-center();
            height: $size;
            .img {
                width: 50px;
                height: 46px;
            }
        }
        &_search {
            display: flex;
            align-items: center;
            width: 70%;
            height: 70%;
            background: $bgc-fff;
            border-radius: 40px;
            .img {
                width: 40px;
                height: 30px;
            }
            .iconSearch {
                font-size: 40px;
                color: $color-ccc;
                position: relative;
                &:after {
                    content: '';
                    position: absolute;
                    left: 10px;
                    top: 10%;
                    width: 1px;
                    height: 80%;
                    background: $color-ccc;
                }
            }
            &_txt {
                font-size: 28px;
                color: $color_999;
            }
        }
        &_login {
            @include flex-center();
            width: 15%;
            height: $size;
            font-size: 28px;
            color: $color-default;
        }

    }
    .isScroll {
        background: $bgc-theme;
    }
</style>
