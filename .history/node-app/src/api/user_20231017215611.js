import axios from '../../axios'

// 用户登录
export function userLogin(data) {
  return axios.post(`/login`, data)
}

// 修改密码
export function updatePassword(data) {
  return axios.post('/updatePassword', data)
}

// 获取用户信息
export function getUserInfo(username){
  return axios.get('/getUserInfo?username=' + username)
}
