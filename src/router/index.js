import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dompen from '../views/projects/Dompen.vue'
import Domcbd from '../views/projects/Domcbd.vue'
import Unet from '../views/projects/Unet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home | Trey Oehmler'
    }
  },
  {
    path: '/dompen',
    name: 'dompen',
    component: Dompen,
    meta: {
      title: 'Dompen | Trey Oehmler'
    }
  },
  {
    path: '/domcbd',
    name: 'domcbd',
    component: Domcbd,
    meta: {
      title: 'DomCBD | Trey Oehmler'
    }
  },
  {
    path: '/unet',
    name: 'unet',
    component: Unet,
    meta: {
      title: 'Tumor Segmentation | Trey Oehmler'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
