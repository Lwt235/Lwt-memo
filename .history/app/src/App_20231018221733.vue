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
import { updatePassword, getUserInfo } from '../../api/user'

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
  if (form.newPassword !== form.rePassword) return
  updatePassword(form)
      .then((res: any) => {
          alert(res.data.msg)
          router.push('/')
          alert('修改密码后请重新登录')
      })
      .catch((err: any) => {
          alert(err.response.data.msg)
      })
}

const getUser = () => {
  getUserInfo(form.username)
      .then((res: any) => {
          for (const key in userInfo) {
              userInfo[key] = res.data.data[0][key]
          }
      })
      .catch((err) => {
          console.log(err)
      })
}

</script>
