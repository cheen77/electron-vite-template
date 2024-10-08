// 管理事件路由
export default class EventRouter {
  #api = {}
  routers
  constructor() {
    this.routers = new Array()
  }
  //添加api
  addApi(key, api) {
    this.#api[key] = api
  }
  //添加多个路由
  addRouters(routers) {
    this.routers = this.routers.concat(routers)
  }
  //触发指定名称的路由回调
  router(data) {
    for (let i = 0; i < this.routers.length; i++) {
      let r = this.routers[i]
      if (data.name == r.name && r.callback) {
        r.callback(this.#api, data)
      }
    }
  }
}
