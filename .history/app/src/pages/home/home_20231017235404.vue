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
  const form = reactive({
      username:'',
      password:''
  })
  const login = () => {
      console.log('login')
  }
  </script>
  