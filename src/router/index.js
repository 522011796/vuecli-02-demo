import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/page/index/index'
import Music from '@/page/index/music'
import Diantai from '@/page/index/diantai'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'music',
          component: Music,
        },
        {
          path: 'diantai',
          component: Diantai,
        }
      ]
    }
  ]
})
