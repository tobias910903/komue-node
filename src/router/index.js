import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

import "@/assets/css/komue.css"
import "@/assets/iconfonts/iconfont.css"

Vue.use(Vuex)
Vue.use(Router)


/* 路由 */
import notfound from '@/pages/404'
import login from '@/pages/login'
import home from '@/pages/home'
import childrenList from '@/pages/childrenList'
import childrenDetail from '@/pages/childrenDetail'

export default new Router({
  routes: [
    {
      path: '*',
      name: 'notfound',
      component: notfound
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path: 'childrenList',
          name: 'childrenList',
          component: childrenList
        },
        {
          path: 'childrenDetail',
          name: 'childrenDetail',
          component: childrenDetail
        }
      ]
    }
  ]
})

