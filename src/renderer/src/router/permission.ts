// 全局路由守卫
import router from './index'

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach(async (to, from, next) => {})

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {})

/**
 * @description 路由跳转错误
 * */
router.onError((error) => {})
