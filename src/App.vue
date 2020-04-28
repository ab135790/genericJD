<template>
  <div id="app">
    <publicFooter v-if="getCurFooter"/>
    <router-view></router-view>
  </div>
</template>

<script>
    import publicFooter from './components/publicFooter/';
    import { mapGetters } from 'vuex';
    export default {
        name: 'App',
        components: {
            publicFooter
        },
        computed: {
            ...mapGetters({
                getCurFooter: 'moduleBase/getCurFooter'
            })
        },
    };
</script>

<style>

</style>
