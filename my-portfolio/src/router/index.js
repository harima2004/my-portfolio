import { createRouter, createWebHistory } from 'vue-router'
import PortfolioHome from '../views/PortfolioHome.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: PortfolioHome,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('../views/Work.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash }
    return { top: 0 }
  },
})
export default router
