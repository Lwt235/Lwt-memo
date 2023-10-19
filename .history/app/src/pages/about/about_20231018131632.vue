<template>
    <div>
        用户名:
        <input type="text" v-model="form.username">
        <br>
        新密码:
        <input type="text" v-model="form.newPassword">
        <br>
        新密码:
        <input type="text" v-model="form.rePassword">
        <br>
    </div>
    <button @click="update">确认修改</button>
    <button @click="getUser">查询</button>
    <div>
        用户信息:
        <br>
        昵称:{{ userInfo.nickname }}
        <br>
        性别:{{ userInfo.gender }}
        <br>
        年龄:{{ userInfo.age }}
    </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'
import { useRouter } from "vue-router"

const router = useRouter()
const form = reactive({
    username: '',
    newPassword: '',
    rePassword: '',
})
const userInfo = reactive({
    nickname: '',
    gender: '',
    age: '',
})
const update = () => {
    router.push('/')
}
const getUser = () => {
    console.log('getUser')
}
</script>
