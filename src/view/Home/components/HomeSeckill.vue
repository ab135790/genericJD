<template>
    <div class="plr30">
        <div class="homeSeckill">
            <div class="homeSeckill_title plr20 mb10">
                <div class="left">
                    <img :src="require('@/assets/img/home/home_seckill.png')" alt="" class="img">
                    <strong class="nth plr10">14点场</strong>
                    <div class="time plr10">
                        <div class="time_hh">00</div>
                        <span class="time_separator mlr5">:</span>
                        <div class="time_mm">23</div>
                        <span class="time_separator mlr5">:</span>
                        <div class="time_ss">11</div>
                    </div>
                </div>
                <div class="right pr30">
                    更多秒杀
                    <van-icon name="arrow" class="icon"/>
                </div>
            </div>
            <swiper class="homeSeckill_swiper" :options="swiperSeckill">
                <swiper-slide  class="homeSeckill_swiper_item" v-for="(seckill, index) of seckillData" :key="'seckill' + index">
                    <div class="topImg mb10">
                        <img :src="seckill.url" alt="" class="img">
                    </div>
                    <div class="newPrice mb10"><sub>￥</sub>{{seckill.newPrice}}</div>
                    <div class="originalPrice mb20">￥{{seckill.originalPrice}}</div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
    import { swiperSeckill } from '../config';
    export default {
        name: 'HomeSeckill',
        data() {
            return {
                swiperSeckill,
                seckillData: [
                    {
                        url: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/97022/4/12437/387518/5e4693b9Ef23833c7/0b7b5f30f1fc3761.jpg.dpg',
                        newPrice: '53.9',
                        originalPrice: '59.9'
                    },
                    {
                        url: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/103841/20/19493/188229/5e9fba2fEe4988dac/59a6db58d6e366f0.jpg.dpg',
                        newPrice: '369',
                        originalPrice: '399'
                    },
                    {
                        url: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/112185/17/2534/125749/5ea270fcEa968ed66/6a03e4d02451e7a7.jpg.dpg',
                        newPrice: '1548',
                        originalPrice: '2209'
                    },
                    {
                        url: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/104053/20/19811/152701/5ea2844aE5034a137/d535135229f885c4.jpg.dpg',
                        newPrice: '19.9',
                        originalPrice: '22.9'
                    },
                    {
                        url: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/118582/32/2335/98349/5ea13ebbE426baf19/a4779cb297b34a7e.jpg.dpg',
                        newPrice: '899',
                        originalPrice: '999'
                    },
                    {
                        url: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/99389/8/18608/103557/5e95959fE99cf6830/1789c6b262e120a8.png.webp',
                        newPrice: '39',
                        originalPrice: '58'
                    },
                    {
                        url: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/118582/32/2335/98349/5ea13ebbE426baf19/a4779cb297b34a7e.jpg.dpg',
                        newPrice: '899',
                        originalPrice: '999'
                    },
                    {
                        url: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/99389/8/18608/103557/5e95959fE99cf6830/1789c6b262e120a8.png.webp',
                        newPrice: '39',
                        originalPrice: '58'
                    }
                ]
            };
        },
    };
</script>

<style lang="scss" scoped>
    @import '~@/assets/css/_mixins.scss';
    .homeSeckill {
        background: $bgc-fff;
        box-shadow: 0 2px 2px #f2f2f2;
        border-radius: 30px;
        &_title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: url('../../../assets/img/home/home_title.png');
            height: 70px;
            background-size: contain;
            .left {
                display: flex;
                align-items: center;
                .img {
                    width: 140px;
                    height: 35px;
                }
                .nth {
                    font-size: 24px;
                    color: $color_232326;
                    font-weight: 700;
                    display: inline-block;
                }
                .time {
                    display: flex;
                    &_ss,
                    &_mm,
                    &_hh {
                        width: 36px;
                        height: 32px;
                        line-height: 34px;
                        color: $color_232326;
                        font-size: 24px;
                        position: relative;
                        text-align: center;
                        &:after {
                            content: '';
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 90%;
                            height: 90%;
                            border: 1px solid $color-ccc;
                        }
                    }
                }
            }
            .right {
                position: relative;
                font-size: 24px;
                color: $color_e93b3d;
                .icon {
                    position: absolute;
                    right: 0;
                    top: 0;
                }
            }
        }
        &_swiper {

            &_item {
                width: 300px;
                .topImg {
                    position: relative;
                    width: 100%;
                    padding-top: 100%;
                    .img {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                    }
                }
                .newPrice {
                    font-family: 'Microsoft YaHei';
                    color: $color_e93b3d;
                    font-size: 32px;
                    line-height: 32px;
                    height: 32px;
                    font-weight: 600;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                }
                .originalPrice {
                    color: $color_999;
                    font-size: 24px;
                    line-height: 24px;
                    text-align: center;
                    padding: 0 2px;
                    position: relative;
                    text-decoration:line-through;
                }
                sub {
                    font-size: 24px;
                    align-items: flex-end;
                }
            }
        }
    }
</style>
