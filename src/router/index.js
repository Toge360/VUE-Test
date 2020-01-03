import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloAxios from '@/components/HelloAxios'
import HelloPage from '@/components/HelloPage'

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
    }
  ],
  mode: 'history'
})
