import Vue from 'vue'
import Router from 'vue-router'
import MuseUI from 'muse-ui'
import Login from '@/login'
import Register from '@/register'
import 'muse-ui/dist/muse-ui.css'
import HelloWorld from '@/components/HelloWorld'
import ChsiList from '@/components/ChsiList'
import Route from '@/components/Route'


Vue.use(Router)
Vue.use(MuseUI)

let router = new Router({
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/chsi-view',
      name: 'ChsiView',
      meta: {
        requireAuth: true
      },
      component: ChsiList
    },
    {
      path: '/route',
      name: 'Route',
      meta: {
        requireAuth: true
      },
      component: Route
    },
    {
        path:'/*',
        redirect:'/'
    }
  ]
})

export default router;

