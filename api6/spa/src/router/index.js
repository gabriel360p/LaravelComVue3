import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Middleware from '@/services/middleware'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'auth-login',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/LoginView.vue')

  },
  {
    path: '/register',
    name: 'auth-register',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/RegisterView.vue')

  },
  {
    path: '/dash',
    name: 'content-dashboard',
    //passando o middleware antes da renderização do componente
    beforeEnter: Middleware.guard,
    

    component: () => import(/* webpackChunkName: "about" */ '../views/DashView.vue')

  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
