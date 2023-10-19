/*
 * @Author: maximing
 * @Date: 2022-12-28 09:06:42
 * @LastEditTime: 2022-12-28 11:23:40
 * @LastEditors: your name
 * @Description: 请添加描述
 * @FilePath: \domysql\src\server\index.js
 */
 
const express = require('express')
const app = express()
 
const cors = require('cors') //解决跨域问题
app.use(cors())
 
const bodyParser = require('body-parser')
const multiparty = require('connect-multiparty')
// 处理 x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }))
// 处理 mutipart/form-data
app.use(multiparty())
// 处理 application/json
app.use(bodyParser.json())
 
//一个简单的测试接口
app.get('/test',(req,res)=>{
    res.send('测试用的接口')
})
 
//监听node服务器的端口号
app.listen(3000, () => {
	console.log('恭喜你，服务器启动成功')
})