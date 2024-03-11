import { defineStore } from 'pinia'
export const useUserStore = defineStore('userId', {
  state: (): {
    roles: any[]
    rolePerm: string
    userInfo: Partial<any>
    permissions: any
  } => {
    return {
      roles: [],
      rolePerm: '',
      userInfo: {},
      permissions: []
    }
  },
  getters: {},
  actions: {},
  persist: {
    enabled: true, //开启数据缓存
    strategies: [
      {
        storage: localStorage, //默认走session
        paths: ['rolePerm', 'userInfo', 'permissions']
      }
    ]
  }
})
