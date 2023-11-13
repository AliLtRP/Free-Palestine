import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../components/home/HomeComp.vue'
// import about from '../components/about/aboutMe.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/home/HomeComp.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/about/aboutMe.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not found',
    component: () => import('../components/home/notFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.push('/');
router.push('/about');

export default router;
