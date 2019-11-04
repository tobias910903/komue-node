import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

Vue.use(Vuex);
Vue.use(Router);

/* 路由 */
import notfound from '@/views/404'
import login from '@/views/login'
import home from '@/views/home'
import childrenList from '@/views/childrenList'
import childrenDetail from '@/views/childrenDetail'

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            children: [
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
        },
        {
            path: '*',
            name: 'notfound',
            component: notfound
        }
    ]
});

// 导航守卫
router.beforeEach((to, from, next) => {
    next();
});

export default router;
