/*
vuex最核心的管理对象store
 */
import Vue from 'vue';
import Vuex from 'vuex';
import moduleBase from './moduleBase';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        moduleBase
    },
    state: {
    },
    mutation: {
    },
    actions: {

    },
    getters: {

    }
});

export default store;
