import Axios from 'axios'
const instance = Axios.create({
	baseURL: 'http://localhost:3000'
})
 
instance.interceptors.request.use((config) => {
	console.log(config, '发送请求前config信息')
	return config
}, err => {
	return Promise.reject(err)
})
 
instance.interceptors.response.use((res) => {
	console.log('接受的数据')
	return res.data
}, err => {
	return Promise.reject(err)
})
 
export default instance