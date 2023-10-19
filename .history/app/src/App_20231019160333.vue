<template>
	<div>
		<h1>Lwt的备忘录</h1>
	</div>
	<div class="Main">
		<section class="main">
			<div style="padding-bottom: 10px ;border: 1px solid black;">
				<input v-model="user" placeholder="请输入任务" style="height: 60px; width: 240px;">
				<button @click="Add" style="height: 60px; width: 120px;font-size: 20px">添加任务</button>
				<ul class="todo-list">
					<li class="todo" v-for="(item,index) in List" :key="item.id">
						<div class="view">
							<span class="index">{{ index + 1 }}.</span><label>{{ item.msg }}</label>
						</div>
					</li>
				</ul>
				<div style="padding-bottom: 10px ;border: 1px solid black;">
					<div style="padding: 10px ;border: 1px solid black;">
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
 
<script>
//导入我们之前写的接口
import { getUser } from './axios/api'
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
		Add() {

		}
	},
	created: function () {
		let res = getUser()
		console.log(res, '初始化,获取的用户信息')
		res.then((result)=>{
			console.log("result",result);
			this.List = result
		})
	}
}
</script>
 
<style>
</style>