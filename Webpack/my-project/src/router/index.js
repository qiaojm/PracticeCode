import Vue from 'vue'
import Router from 'vue-router'
import RequestData from '@/pages/RequestData'
import Page1Container from '@/pages/Page1Container'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page1Container',
      component: Page1Container
    },
    {
      path: '/test001',
      name: 'RequestData',
      component: RequestData
    }
  ]
})