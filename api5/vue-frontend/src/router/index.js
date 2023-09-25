import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Middleware from '../services/Middleware';

const routes = [
  {
    path: '/',
    name: 'home',
    beforeEnter: Middleware.guard,
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    beforeEnter: Middleware.guard,
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
  ,
  





  //CATEGORIES -------------------------------------------------------------
  {
    path: '/categories/create',
    name: 'categories-create',
    beforeEnter:Middleware.guard,
    component: () => import(/* webpackChunkName: "about" */ '../views/Categorie/CreateView.vue')
  }
  ,
  //-------------------------------------------------------------------------















  //PLACES -------------------------------------------------------------
  {
    path: '/places/create',
    name: 'places-create',
    beforeEnter:Middleware.guard,

    component: () => import(/* webpackChunkName: "about" */ '../views/Place/CreateView.vue')
  }
  ,
  //-------------------------------------------------------------------------
















  //ITENS -------------------------------------------------------------
  {
    path: '/itens/create',
    name: 'itens-create',
    beforeEnter:Middleware.guard,

    component: () => import(/* webpackChunkName: "about" */ '../views/Iten/CreateView.vue')
  }
  ,
  {
    path: '/itens/refounds',
    name: 'itens-refounds',
    beforeEnter:Middleware.guard,

    component: () => import(/* webpackChunkName: "about" */ '../views/Iten/RefoundsView.vue')
  }
  ,
  {
    path: '/itens/edit/:id',
    name: 'itens-edit',
    beforeEnter:Middleware.guard,
    component: () => import(/* webpackChunkName: "about" */ '../views/Iten/EditView.vue')
  }
  ,
  //-------------------------------------------------------------------------
















  //AUTH -------------------------------------------------------------
  {
    path: '/login',
    name: 'auth-login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth/LoginView.vue')
  }
  ,
  {
    path: '/register',
    name: 'auth-register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth/RegisterView.vue')
  }
  ,
  //-------------------------------------------------------------------------






]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
