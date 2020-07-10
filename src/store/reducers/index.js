import { combineReducers } from 'redux'

const modulesFiles = require.context('./', false, /\.js$/)

const modules = modulesFiles.keys().reduce((module, modulePath) => {
  // set './app.js' => 'app' 将后缀.js 去掉
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  // 返回这个匹配文件相对于整个工程的相对路径
  const value = modulesFiles(modulePath)
  if (value.default) module[moduleName] = value.default
  return module
}, {})

export default combineReducers(modules)
