import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/page/index/index'
import Music from '@/page/index/music'
import Diantai from '@/page/index/diantai'
import MyMusic from '@/page/myMusic/index'
import Detail from '@/page/index/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
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
    },
    {
      path: '/myMusic',
      name: 'myMusic',
      component: MyMusic,
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
    }
  ]
})
