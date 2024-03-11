import { createApp } from 'vue'
import App from './App.vue'
//路由
import router from './router/index'
//状态管理
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
const store = createPinia()
store.use(piniaPluginPersist)
//重置css文件
import './assets/css/reset.scss'

createApp(App).use(router).use(store).mount('#app')
