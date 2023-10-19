import axios from '../../axios'

// 用户登录
export function userLogin(data:any) {
  return axios.post('/login', data)
}

// 修改密码
export function updatePassword(data:any) {
  return axios.post('/updatePassword', data)
}

// 获取用户信息
export function getUserInfo(username:string){
  return axios.get('/getUserInfo?username=' + username)
}
