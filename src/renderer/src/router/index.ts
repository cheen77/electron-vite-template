import { createRouter, createWebHashHistory } from 'vue-router'

//引入路由表
import { AppRoutes } from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: AppRoutes
})

export default router
