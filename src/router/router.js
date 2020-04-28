import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: 'login' */ '@/view/Home/home.vue')
    }, {
        path: '/cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: 'login' */ '@/view/Cart/cart.vue')
    }]
});
