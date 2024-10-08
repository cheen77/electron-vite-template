export default class EventRoute {
  name: string
  callback: any

  /** 创建路由实例
   * * @param {string} name - 路由名称。
   * * @param {string} event - 要监听的事件。
   * * @param {object} data - 传递给回调函数的数据。
   * * @param {function} callback - 当事件被触发时要执行的回调函数。
   * */
  constructor(name, callback) {
    this.name = name
    this.callback = callback
  }
}
