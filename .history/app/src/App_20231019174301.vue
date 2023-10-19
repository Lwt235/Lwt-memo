<template>
	<div>
		<h1>Lwt的备忘录</h1>
	</div>
	<div class="Main">
		<div style="padding: 20px ;border: 2px solid gray;border-radius: 10px;">
			<input v-model="todomsg" placeholder="请输入任务" style="height: 60px; width: 240px;">
			<button class="add" @click="add" style="height: 60px; width: 120px;font-size: 20px">添加任务</button>
			<ul class="todo-list">
				<li class="todo" v-for="(item,index) in List" :key="item.id">
					<div class="view">
						<span class="index">{{ index + 1 }}.</span><label>{{ item.msg }}</label>
							<button @click="del(item.id)" class="destroy"></button>
					</div>
				</li>
			</ul>
			<footer>
				<span v-show="{{ List.length!=0 }}">合 计: <strong> {{ List.length }} </strong></span>
			</footer>
		</div>
	</div>
</template>
 
<script>
//导入我们之前写的接口
import { getUser } from './axios/api'
import { deleteData } from './axios/api'
import { addData } from './axios/api'
export default {
	name: 'userInfor',
	data() {
		return {
			List: [],
			todomsg: '',
		}
	},
	methods: {
		async del(id) {
			console.log(id)
			this.List = this.List.filter(item => item.id !== id)
			let res = await deleteData({id})
			console.log(res,'/delete')
		},
		async add() {
			if(this.todomsg==='')
			{
				alert('请输入任务名称')
				return
			}
			let ID = +new Date();
			this.List.unshift({
				id: ID,
				msg: this.todomsg
			})
			let res = await addData({
				id: ID,
				msg: this.todomsg
			})
			console.log(res,'/add')
		},
		async clean() {
			
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