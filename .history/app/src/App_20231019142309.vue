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
		},
	},
	created() {
		async getmsg() {
			let res = await getUser()
			console.log(res, '初始化')
			this.List = res.data
		}
	}
}
</script>
 
<style>
</style>