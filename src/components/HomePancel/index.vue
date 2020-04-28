<template>
    <div class="HomePancel">
        <div class="module plr10 ptb20" v-for="(pancel, index) of pancelData" :key="'pancel' + index">
            <div class="graphic">
                <p class="graphic_tit" :class="{titleColor: titleColor}">{{pancel.title}}</p>
                <p class="graphic_wz ptb10">{{pancel.wz}}</p>
            </div>
            <div class="graphicImg plr10">
                <router-link :to="{path: _path, query: { id : pancel.id }}" tag="img" :src="pancel.imgUrl" alt="" class="img"></router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomePancel',
        props: {
            pancelData: {
                type: [Array, Object],
                default() {
                    return [];
                }
            },
            _path: {
                type: String,
                default: '/'
            },
            titleColor: {
                type: Boolean,
                default: false
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '@/assets/css/_mixins.scss';
    .HomePancel {
        display: flex;
        flex-wrap: wrap;
        background: $bgc-fff;
        position: relative;
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: $size;
            height: 1px;
            background: rgba(204,204,204, .2);
        }
        .module {
            width: 25%;
            position: relative;
            &::after{
                content: '';
                position: absolute;
                right: 0;
                top: 0;
                width: 1px;
                height: 100%;
                background: rgba(204,204,204, .2);
            }
            &:last-child::after {
                background: transparent;
            }
            .graphic {
                width: $size;
                &_tit {
                    @include ellipsis();
                    font-size: 32px;
                    font-weight: 700;
                    text-align: center;
                }
                &_wz {
                    @include ellipsis();
                    color: $color_666;
                    font-size: 24px;
                    text-align: center;
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
    .module:nth-child(1) .titleColor{
        background: -webkit-linear-gradient(left,#FF2A2A,#F139D2);
        background: linear-gradient(90deg, #FF2A2A,#F139D2);
        -webkit-background-clip: text;
        color: transparent;
    }
    .module:nth-child(2) .titleColor{
        background: -webkit-linear-gradient(left,#FE8537,#F02B2B);
        background: linear-gradient(90deg, #FE8537,#F02B2B);
        -webkit-background-clip: text;
        color: transparent;
    }
    .module:nth-child(3) .titleColor{
        background: -webkit-linear-gradient(left,#FF765C,#FF23B3);
        background: linear-gradient(90deg, #FF765C,#FF23B3);
        -webkit-background-clip: text;
        color: transparent;
    }
    .module:nth-child(4) .titleColor{
        background: -webkit-linear-gradient(left,#FF2A00,#FF00AF);
        background: linear-gradient(90deg, #FF2A00,#FF00AF);
        -webkit-background-clip: text;
        color: transparent;
    }
    .module:nth-child(5) .titleColor{
        background: -webkit-linear-gradient(left,#D400FF,#FF320A);
        background: linear-gradient(90deg, #D400FF,#FF320A);
        -webkit-background-clip: text;
        color: transparent;
    }
    .module:nth-child(6) .titleColor{
        background: -webkit-linear-gradient(left,#00C2AB,#3E94FF);
        background: linear-gradient(90deg, #00C2AB,#3E94FF);
        -webkit-background-clip: text;
        color: transparent;
    }
    .module:nth-child(7) .titleColor{
        background: -webkit-linear-gradient(left,#FF765C,#FF23B3);
        background: linear-gradient(90deg, #FF765C,#FF23B3);
        -webkit-background-clip: text;
        color: transparent;
    }
    .module:nth-child(8) .titleColor{
        background: -webkit-linear-gradient(left,#2AD396,#85BB1F);
        background: linear-gradient(90deg, #2AD396,#85BB1F);
        -webkit-background-clip: text;
        color: transparent;
    }
</style>
