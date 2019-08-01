//创建管理员
//引入redux
import {createStore}from 'redux'
//引入reducers 数据处理
import reducers from './reducers'
//创建管理员
const store = createStore(reducers)

//导出管理员
export default store;