import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/pages/Login.vue'
import Dashboard from '../views/pages/Dashboard.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
