import { routerMap } from './routerMap'

export const AppRoutes = [
  {
    path: '/',
    component: () => import('@layout/index.vue'),
    //重定向
    redirect: routerMap.Analysis,
    // 子路由
    children: [
      {
        path: routerMap.Analysis,
        name: routerMap.Analysis,
        redirect: `${routerMap.Analysis}/${routerMap.FileImages}`,
        component: () => import('../views/Analysis/index.vue'),
        children: [
          // {
          //   path: routerMap.AnalysisFile,
          //   name: routerMap.AnalysisFile,
          //   component: () => import('../views/Analysis/AnalysisFile/index.vue')
          // }
          {
            path: routerMap.FileImages,
            name: routerMap.FileImages,
            component: () => import('../views/Analysis/FileImages/index.vue')
          }
          // {
          //   path: routerMap.GreyCalculate,
          //   name: routerMap.GreyCalculate,
          //   component: () => import('../views/Analysis/GreyCalculate/index.vue')
          // },
          // {
          //   path: routerMap.OringinCalculate,
          //   name: routerMap.OringinCalculate,
          //   component: () => import('../views/Analysis/OringinCalculate/index.vue')
          // }
        ]
      }
    ]
  }
]
