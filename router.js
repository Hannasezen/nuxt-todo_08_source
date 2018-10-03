import Vue from 'vue'
import Router from 'vue-router'
import Home from '~/pages/index'
import About from '~/pages/about'
import Auth from '~/pages/auth'

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'home',
        path: '/',
        component: Home
      },
      {
        name: 'about',
        path: '/about',
        component: About
      },
      {
        name: 'auth',
        path: '/auth',
        component: Auth
      }
    ]
  })
}
