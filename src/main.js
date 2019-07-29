import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import './registerServiceWorker'
import '../public/js/iconfont.css'



import axios from 'axios'
Vue.prototype.axios = axios;

Vue.filter('setWH', (url, arg) => {
  return url.replace(/w\.h/, arg)
})


import Srcoller from '@/components/Srcoller';
Vue.component('Srcoller',Srcoller)  //全局注册这个滑动的组件组件


import Loading from '@/components/Loading'
Vue.component('Loading',Loading)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);