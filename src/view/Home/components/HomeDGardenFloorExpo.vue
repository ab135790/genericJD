<template>
    <div class="HomeDGarden plr30">
        <div class="HomeDGarden_title">
            <img :src="require('@/assets/img/home/HomeDGarden_1.png')" alt="" class="img">
        </div>
        <div class="HomeDGarden_content">
            <div class="top">
                <div class="module plr20 ptb20" v-for="(top, index) of formDataTop" :key="'top' + index">
                    <div class="graphic">
                        <p class="graphic_tit">{{top.title}}</p>
                        <p class="graphic_wz ptb10">{{top.wz}}</p>
                    </div>
                    <div class="graphicImg plr20">
                        <router-link :to="{ path: '/', query: { id: top.id } }" tag="img" :src="top.imgUrl" alt="" class="img"></router-link>
                        <router-link :to="{ path: '/', query: { id: top.children.id } }" tag="img" :src="top.children.imgUrl" alt="" class="img" v-if="Object.keys(top.children).length"></router-link>
                    </div>
                </div>
            </div>
            <HomePancel :pancelData="farmData" _path="/"></HomePancel>
        </div>
        <div class="HomeDGarden_title">
            <img :src="require('@/assets/img/home/HomeDGarden_2.png')" alt="" class="img">
        </div>
        <div class="HomeDGarden_content">
            <HomePancel :pancelData="DailyData" _path="cart" :titleColor="true"></HomePancel>
        </div>
    </div>
</template>

<script>
    import HomePancel from '@/components/HomePancel/';
    import { farmData, formDataTop, DailyData } from '../config';
    export default {
        name: 'HomeDGardenFloorExpo',
        data() {
            return {
                farmData,
                formDataTop,
                DailyData
            };
        },
        components: {
            HomePancel
        }
    };
</script>

<style lang="scss" scoped>
    @import '@/assets/css/_mixins.scss';
    .HomeDGarden {
        &_title {
            height: 70px;
            .img {
                width: 100%;
                height: 100%;
            }
        }
        &_content {
            overflow: hidden;
            background: $bgc-fff;
            border-radius: 12px;
            .top {
                display: flex;
                .module {
                    width: 50%;
                    position: relative;

                    &:first-child::after{
                        content: '';
                        position: absolute;
                        right: 0;
                        top: 0;
                        width: 1px;
                        height: 100%;
                        background: rgba(204,204,204, .2);
                    }
                    .graphic {
                        width: $size;
                        &_tit {
                            @include ellipsis();
                            font-size: 32px;
                            font-weight: 700;
                            background: -webkit-linear-gradient(left,#45CAFF,#1471FB);
                            background: linear-gradient(90deg, #45CAFF,#1471FB);
                            -webkit-background-clip: text;
                            color: transparent;
                        }
                        &_wz {
                            @include ellipsis();
                            color: $color_666;
                            font-size: 24px;
                        }
                    }
                    .graphicImg {
                        display: flex;
                        justify-content: space-between;
                        .img {
                            width: 120px;
                            height: 120px;
                        }
                    }
                }
            }

        }
    }
</style>
