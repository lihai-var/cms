// 全局注入 
// import { injectTool } from './tool'
import injectHttp from './http'
// import errorLog from './errorHandler.js'
import utils from './utils'

export const injectGlobal = () => {
  // injectTool();
  injectHttp();
  utils()
  // errorLog();
}