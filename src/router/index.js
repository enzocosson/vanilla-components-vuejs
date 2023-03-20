import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HeaderView from '../views/HeaderView.vue'
import SectionView from '../views/SectionView.vue'
import CardView from '../views/CardView.vue'
import CarouselView from '../views/CarouselView.vue'
import FooterView from '../views/FooterView.vue'
import PhpView from '../views/PhpView.vue'
import MysqlView from '../views/MysqlView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/header',
    name: 'header',
    component: HeaderView
  },
  {
    path: '/section',
    name: 'section',
    component: SectionView
  },
  {
    path: '/card',
    name: 'card',
    component: CardView
  },
  {
    path: '/carousel',
    name: 'carousel',
    component: CarouselView
  },
  {
    path: '/footer',
    name: 'footer',
    component: FooterView
  },
  {
    path: '/php',
    name: 'php',
    component: PhpView
  },
  {
    path: '/mysql',
    name: 'mysql',
    component: MysqlView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
