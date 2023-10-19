import request from './index'
 
//获取用户信息接口
export const getUser = (data) => request.get('/getUser')
export const deleteData = (data) => request.post('/delete')