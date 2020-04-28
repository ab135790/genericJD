<template>
    <div class="footer">
        <ul class="footer_txt">
            <li
                    v-for="(item, index) of footerData"
                    :key="'item' + index"
                    class="footer_txt_li"
                    @click.stop="switchTap(item, index)"
            >
                <img :src="item.icon" alt="" v-if="current === index" class="img">
                <img :src="item.isIcon" alt="" v-else class="img">
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: 'publicFooter',
        data() {
            return {
                footerData: [
                    {
                        'icon': require('../../assets/img/footerNav/home.png'),
                        'isIcon': require('../../assets/img/footerNav/isHome.png'),
                        'path': '/'
                    },
                    {
                        'icon': require('../../assets/img/footerNav/categroy.png'),
                        'isIcon': require('../../assets/img/footerNav/isCategroy.png'),
                        'path': '/cart'
                    },
                    {
                        'icon': require('../../assets/img/footerNav/isSurprise.png'),
                        'isIcon': require('../../assets/img/footerNav/isSurprise.png'),
                        'path': '/'
                    },
                    {
                        'icon': require('../../assets/img/footerNav/cart.png'),
                        'isIcon': require('../../assets/img/footerNav/isCart.png'),
                        'path': '/'
                    },
                    {
                        'icon': require('../../assets/img/footerNav/isLogin.png'),
                        'isIcon': require('../../assets/img/footerNav/isLogin.png'),
                        'path': '/'
                    }
                ],
                current: 0
            };
        },
        methods: {
            switchTap(item, index) {
                this.current = index;
                this.$router.push(item.path);
                // this.$store.commit('moduleBase/GETCURFOOTERNUM', index);
            }
        },
        computed: {
            ...mapGetters({
                getCurFooterNum: 'moduleBase/getCurFooterNum',
                getCurFooter: 'moduleBase/getCurFooter'
            })
        }
    };
</script>

<style lang="scss" scoped>
    @import '~@/assets/css/_mixins.scss';
    .footer {
        position: fixed;
        left: 0;
        width: 100%;
        height: 100px;
        box-shadow: 0 -3px 10px rgba(3, 3, 3, 0.1);
        bottom: 0;
        z-index: $navbar_index;
        background: $color-default;
        &_txt {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100%;
            &_li {
                width: 25%;
                height: 100%;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                .icon {
                    font-size: 48px;
                }
                .img {
                    width: 120px;
                    height: 92px;
                }
            }
        }
    }
</style>
