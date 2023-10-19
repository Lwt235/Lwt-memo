<template>
    <div>
        账 号:
        <input type="text" v-model="form.username">
        <br>
        密 码:
        <input type="text" v-model="form.password">
    </div>
    <button @click="login">登录</button>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'
import { useRouter } from "vue-router"

const router = useRouter()
const form = reactive({
    username: '',
    password: ''
})
const login = () => {
    router.push('/about')
}
</script>

<style scoped></style>
