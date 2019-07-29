import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import movieRouters from './movie'
import cinemaRouters from './cinema'
import mineRouters from './mine'

import registerRouters from './register'

import adminRouters from './admin';
import loginPageRouters from './loginPage';
 // register

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  base:'miaomiao',
  routes: [
    movieRouters,
    cinemaRouters,
    mineRouters,
    adminRouters,
    registerRouters,
    loginPageRouters,
    {
      path:'/*',
      redirect :'/movie/comingSoon'
    }

  ]
})
 
