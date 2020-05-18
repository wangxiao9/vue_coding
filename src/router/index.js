import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo1 from '../components/Demo1.vue'

Vue.use(VueRouter)
// 路由规则
const routes = [
  {
    path: '/',
    redirect: '/demo1'
  },
  {
    path: '/demo1',
    name: 'Demo1',
    component: Demo1
  }
]

const router = new VueRouter({
  routes
})

export default router
