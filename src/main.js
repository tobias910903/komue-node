import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/store'

// axios
import axios from 'axios'
import {post, get} from '@/api'
import {URL_CONFIG} from '@/api/url'

Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$api = URL_CONFIG;

// utils
import {arrayFun} from '@/utils/array'
import {timeFun} from '@/utils/time'
import {validatorFun} from '@/utils/validator'
Vue.prototype.$array = arrayFun
Vue.prototype.$time = timeFun
Vue.prototype.$validator = validatorFun


// 阻止启动生产消息
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
