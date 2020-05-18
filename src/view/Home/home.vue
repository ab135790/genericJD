<template>
    <div class="pb100">
        <HomeHeader class="HomeHeader"/>
        <HomeSwiper/>
        <HomeNav class="mb20"/>
        <HomeSeckill class="mb20"/>
        <HomeNewExclusive/>
        <HomeDGardenFloorExpo class="mb20"/>
        <HomeScrollNews/>
        <HomeList class="mb20"/>
        <publicFooter/>
        <backTop/>
    </div>
</template>
<script>
    import HomeHeader from './components/HomeHeader';
    import HomeSwiper from './components/HomeSwiper';
    import HomeNav from './components/HomeNav';
    import HomeSeckill from './components/HomeSeckill';
    import HomeNewExclusive from './components/HomeNewExclusive';
    import HomeDGardenFloorExpo from './components/HomeDGardenFloorExpo';
    import HomeScrollNews from './components/HomeScrollNews';
    import HomeList from './components/HomeList';
    import publicFooter from '@/components/publicFooter/';
    import backTop from '@/components/backTop';
    export default {
        name: 'home',
        data() {
            return {

            };
        },
        components: {
            HomeHeader,
            HomeSwiper,
            HomeNav,
            HomeSeckill,
            HomeNewExclusive,
            HomeDGardenFloorExpo,
            HomeScrollNews,
            HomeList,
            publicFooter,
            backTop
        }
    };
</script>

<style lang="scss" scoped>
    @import '@/assets/css/_mixins.scss';
    .HomeHeader {
        position: fixed;
        width: $size;
        z-index: $head-z-index;
        background: $bgc-theme;
    }
</style>
