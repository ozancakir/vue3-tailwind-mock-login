import store from '@/store'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/pages/Login.vue'),
    beforeEnter: (to, from, next) => {
      const isLoggedIn = store.getters['auth/isLoggedIn']
      if (isLoggedIn) {
        next({
          name: 'Dashboard' // go to app
        })
      } else {
        next()
      }
    }
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/pages/Dashboard.vue'),
    beforeEnter: (to, from, next) => {
      const isLoggedIn = store.getters['auth/isLoggedIn']
      if (!isLoggedIn) {
        next({
          name: 'Login' // go to app
        })
      } else {
        next()
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: import(/* webpackChunkName: "dashboard" */ '../views/pages/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  await store.dispatch('auth/init')
  next()
})

export default router
