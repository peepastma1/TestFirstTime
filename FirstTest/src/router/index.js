import { createRouter, createWebHistory } from 'vue-router'
import Ex1 from '../views/Ex1.vue'
import Ex2 from '../views/Ex2.vue'
import Ex3 from '../views/Ex3.vue'
import Ex4 from '../views/Ex4.vue'
import Ex5 from '../views/Ex5.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/ex1'
    },
    {
      path : '/:catchAll(.*)',
      redirect: '/ex1'
    },
    {
      path: '/ex1',
      name: 'ex1',
      component: Ex1
    },
    {
      path: '/ex2',
      name: 'ex2',
      component: Ex2
    },
    {
      path: '/ex3',
      name: 'ex3',
      component: Ex3
    },
    {
      path: '/ex4',
      name: 'ex4',
      component: Ex4
    },
    {
      path: '/ex5',
      name: 'ex5',
      component: Ex5
    }
  ]
})

export default router
