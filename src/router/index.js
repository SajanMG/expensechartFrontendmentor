import { createRouter, createWebHistory } from 'vue-router'
import ChartView from '../views/ChartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ChartView',
      component: ChartView
    }
  ]
})

export default router
