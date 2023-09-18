import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
  ,







  //CATEGORIES -------------------------------------------------------------
  {
    path: '/categories/create',
    name: 'categories-create',
    component: () => import(/* webpackChunkName: "about" */ '../views/Categorie/CreateView.vue')
  }
  ,
  //-------------------------------------------------------------------------















  //PLACES -------------------------------------------------------------
  {
    path: '/places/create',
    name: 'places-create',
    component: () => import(/* webpackChunkName: "about" */ '../views/Place/CreateView.vue')
  }
  ,
  //-------------------------------------------------------------------------
















  //ITENS -------------------------------------------------------------
  {
    path: '/itens/create',
    name: 'itens-create',
    component: () => import(/* webpackChunkName: "about" */ '../views/Iten/CreateView.vue')
  }
  ,
  {
    path: '/itens/refounds',
    name: 'itens-refounds',
    component: () => import(/* webpackChunkName: "about" */ '../views/Iten/RefoundsView.vue')
  }
  ,
  {
    path: '/itens/edit/:id',
    name: 'itens-edit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Iten/EditView.vue')
  }
  ,
  //-------------------------------------------------------------------------







]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
