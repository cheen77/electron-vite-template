import https from 'https'
import fs from 'fs'

import EventRoute from './EventRoute'
const routers = new Array()

/*
 * 关闭软件
 */
routers.push(
  new EventRoute('close-login', (api, data) => {
    api.mainWindow.close()
  })
)

export default routers
