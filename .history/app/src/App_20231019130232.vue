<template>
	<head>
		<title>Lwt的备忘录</title>
	</head>
	<div>
		<h1>Lwt的备忘录</h1>
	</div>
	<div>
        <input v-model="user" placeholder="输入用户名查询用户信息">
		<button @click="getUser">点击获取用户信息</button>
		<br><span>{{userInfo}}</span>
	</div>
</template>
 
<script>
//导入我们之前写的接口
import { getUserInfo } from './axios/api'
export default {
	name: 'userInfor',
	data() {
		return {
			userInfo: '',
			user: '',
		}
	},
	methods: {
        
		async getUser() {
			let res = await getUserInfo({ user: this.user })
			console.log(res, '/api', '获取的用户信息')
			this.userInfo = res.data
		},
	},
	created() {
 
	}
}
</script>
 
<style>
</style>