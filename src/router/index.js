import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo1 from '../components/Demo1.vue'
import Form from '../components/Form.vue'
import Father from '../components/component/Father.vue'
import Son from '../components/component/Son.vue'


Vue.use(VueRouter)
// 路由规则
const routes = [
  {
    path: '/',
    redirect: '/form'
  },
  {
    path: '/demo1',
    name: 'Demo1',
    component: Demo1
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/father',
    name: 'Father',
    component: Father
  },
  {
    path: '/son',
    name: 'Son',
    component: Son
  }
]

const router = new VueRouter({
  routes
})

// 路由导航守卫
router.beforeEach((to, from, next) => {
  /**
   * to: 将要访问的路径
   * from: 从哪个路径挑战
   * next: 放行
   */
  if (to.path === '/form') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/form')
  next()
})


export default router
