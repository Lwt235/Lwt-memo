<template>
	<div>
		<h1>Lwt的备忘录</h1>
	</div>
	<div class="Main">
		<input v-model="user" placeholder="请输入任务" style="height: 60px; width: 240px;">
		<button @click="getUser" style="height: 60px; width: 100px;">添加任务</button>
		<br>
		<!-- <span>{{userInfo}}</span> -->
		<section class="main">
			<ul class="todo-list">
				<li class="todo" v-for="(item,index) in List" :key="item.id">
					<div class="view">
						<span class="index">{{ index + 1 }}</span><label>{{ item.msg }}</label>
					</div>
				</li>
			</ul>
		</section>
	</div>
</template>
 
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
//导入我们之前写的接口
import { getUserInfo } from './axios/api'
import {getUser} from './axios/api'
export default {
	name: 'userInfor',
	data() {
		return {
			List: [],
			userInfo: '',
			user: '',
		}
	},
	methods: {
		async getUser() {
			let res = await getUserInfo({ user: this.user })
			console.log(res, '/api', '获取的用户信息')
			this.userInfo = res.data
		}
	},
	created() {
		// 在Vue实例创建完成后调用  
		axios.get('/getUser') // 发送HTTP GET请求获取数据  
			.then(response => {  
				// 请求成功时更新数据  
				this.List = response.data  
			})  
			.catch(error => {  
				// 请求失败时打印错误信息  
				console.error(error)  
			})  
	}
}
</script>
 
<style>
</style>