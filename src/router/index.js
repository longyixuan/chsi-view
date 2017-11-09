import Vue from 'vue'
import Router from 'vue-router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import HelloWorld from '@/components/HelloWorld'
import ChsiList from '@/components/ChsiList'
import Route from '@/components/Route'


Vue.use(Router)
Vue.use(MuseUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/chsi-view',
      name: 'ChsiView',
      component: ChsiList
    },
    {
      path: '/route',
      name: 'Route',
      component: Route
    },
    {
        path:'/*',
        redirect:'/'
    }
  ]
})
