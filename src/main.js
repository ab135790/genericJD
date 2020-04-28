import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
// import 'lib-flexible'; // 移动端适配
import store from '@/store/stores';
import '@/assets/js/rem.js';
import '@/assets/css/index.scss';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import Alert from './components/alert';
Vue.config.productionTip = false;
Vue.use(Alert);
Vue.use(VueAwesomeSwiper);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
