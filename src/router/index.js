import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/Login.vue'  
// import Select from '@/views/Select.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/Select',
    name: 'Select',
    component: () => import('@/views/Select')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/views/Home')
  },
]

const router = new VueRouter({
  routes
})

export default router
