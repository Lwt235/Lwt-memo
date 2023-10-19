<template>
	<div>
        <input v-model="user" placeholder="输入用户名查询用户信息">
		<button @click="getUser">点击获取用户信息</button>
	</div>
</template>
 
<script>
export default {
	name: 'userInfor',
	data() {
		return {
			userInfo: '',
			user: '',
		}
	},
	methods: {
 
	},
	created() {
 
	}
}
</script>
 
<style>
</style>