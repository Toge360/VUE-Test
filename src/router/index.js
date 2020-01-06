import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloAxios from '@/components/HelloAxios'
import HelloPage from '@/components/HelloPage'
import NewsDetail from '@/components/NewsDetail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        auth: true,
        title: 'HelloWorld'
      }
    },
    {
      path: '/hellopage',
      name: 'HelloPage',
      component: HelloPage,
      meta: {
        auth: true,
        title: 'HelloPage'
      }
    },
    {
      path: '/newsdetail/:id',
      name: 'NewsDetail',
      component: NewsDetail,
      meta: {
        auth: true,
        title: 'NewsDetail'
      }
    }
  ],
  mode: 'history'
})
