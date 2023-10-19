import request from './index'
 
//获取用户信息接口
export const getUser = (data) => request.get('/getUser')
export const deleteData = (data) => request.get('/delete', { params: data })
export const addData = (data) => request.get('/add', { params: data })
export const clearData = (data) => request.get('/clear')