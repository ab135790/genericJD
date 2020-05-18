<template>
    <div class="publicFooter">
        <ul class="publicFooter_links plr50 ptb40">
            <li class="link plr10">登录</li>
            <li class="link plr10">注册</li>
            <li class="link plr10">客户服务</li>
            <li class="link plr10">返回顶部</li>
        </ul>
        <ul class="publicFooter_icons plr30">
            <li class="icon">
                <img src="https://m.360buyimg.com/mobilecms/jfs/t16423/186/2517573622/5186/75a541f7/5ab1c0deN947bdcba.png" alt="" class="img">
            </li>
            <li class="icon">
                <img src="https://m.360buyimg.com/mobilecms/jfs/t18550/294/898388074/6574/3a8c5413/5ab0b8e9Ne9c48331.png" alt="" class="img">
            </li>
            <li class="icon">
                <img src="https://m.360buyimg.com/mobilecms/jfs/t14581/218/2689195961/4696/203b872a/5ab1c0f2N51c3f1bb.png" alt="" class="img">
            </li>
        </ul>
        <div class="publicFooter_copyright plr30 ptb20">Copyright © 2004-2019 京东JD.com 版权所有</div>
    </div>
</template>

<script>
    export default {
        name: 'index'
    };
</script>

<style lang="scss" scoped>
    @import '@/assets/css/_mixins.scss';
    .publicFooter {
        background: $bgc-fff;
        &_links {
            border-top: 1px solid rgba(204, 204, 204, .2);
            display: flex;
            align-items: center;
            .link {
                text-align: center;
                width: 25%;
                font-size: 28px;
                color: $color_999;
            }
        }
        &_icons {
            display: flex;
            align-items: center;
            justify-content: space-around;
            border-top: 1px solid rgba(204, 204, 204, .5);
            border-bottom: 1px solid rgba(204, 204, 204, .5);
            .icon {
                width: 33.3%;
                @include flex-center();
                .img {
                    width: 120px;
                    height: 120px;
                }
            }
        }
        &_copyright {
            font-size: 24px;
            color: $color_999;
            text-align: center;
        }
    }
</style>
