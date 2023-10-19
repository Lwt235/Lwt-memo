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
 
const cors = require('express') //解决跨域问题
app.use(cors())
 
const bodyParser = require('body-parser')
const multiparty = require('connect-multiparty')
// 处理 x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }))
// 处理 mutipart/form-data
app.use(multiparty())
// 处理 application/json
app.use(bodyParser.json())
//导入我们上一步写的连接数据库的函数
const {conMysql} = require('./mysql')
//创建统一的返回报文对象
class Response {
	constructor(isSucceed, msg, code, data) {
		this.isSucceed = isSucceed;
		this.msg = msg;
		this.code = code;
		this.data = data;
	}
}
 
 
//一个简单的测试接口
app.get('/test',(req,res)=>{
    res.send('测试用的接口')
})
 
//一个简单的接口，查询数据库中的信息
app.get('/getUser', (req, res) => {
	let sql = 'select * from user'
	conMysql(sql).then(result => {
		res.send(result)
	})
})
 
//根据前端传过来的id查询数据库中对应的id的信息
app.get('/getUserInfo', (req, res) => {
	let sql = `select * from user where user = '${req.query.user}'`
	conMysql(sql).then(result => {
		let response = new Response(true, '获取成功', 200, result)
		res.send(response)
	}).catch(err => {
		res.status(500).send('数据库连接出错!')
	})
})
 
//监听node服务器的端口号
app.listen(3000, () => {
	console.log('恭喜你，服务器启动成功')
})