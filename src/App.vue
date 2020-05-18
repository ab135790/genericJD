<template>
  <div id="app">
    <publicNav v-if="getCurNav"/>
    <router-view></router-view>
  </div>
</template>

<script>
    import publicNav from './components/publicNav/';
    import { mapGetters } from 'vuex';
    export default {
        name: 'App',
        components: {
            publicNav
        },
        computed: {
            ...mapGetters({
                getCurNav: 'moduleBase/getCurNav'
            })
        }
    };
</script>

<style>

</style>
