// 导入 express
const express = require('express')
// 创建 app
const app = express()
// 设置跨域访问
const cors = require('cors')
app.use(cors())
// 处理POST参数
const bodyParser = require('body-parser')
const multiparty = require('connect-multiparty')
// 处理 x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended:true
}));
// 处理 application/json
app.use(bodyParser.json())
// 处理 mutipart/form-data
app.use(multiparty())
// 测试接口能否正常调用
app.get('/info', (req, res) => {
  res.send("Hello shaoyahu !")
})
// 启动
app.listen(3000, () => {
  console.log('express server running at http://127.0.0.1:' + 3000);
})

// 引入 mysql 方法
let { conMysql } = require('./mysql')
// 获取全部用户信息，测试数据库连接的上不上
app.get('/getUser', (req, res) => {
  let sql = 'select * from user'
  conMysql(sql).then(result => {
    res.send(result)
  })
})

// 创建统一的返回报文对象
class Response {
  constructor(isSucceed, msg, code, data) {
    this.isSucceed = isSucceed;
    this.msg = msg;
    this.code = code;
    this.data = data;
  }
}

// 登录
app.post('/login', (req, res) => {
  let sql = `select * from userinfo where username = '${req.body.username}'`
  conMysql(sql).then(result => {
    if (result[0]?.password === req.body.password) {
      let response = new Response(true, '登录成功', 200, result)
      res.send(response)
    } else {
      let response = new Response(false, '用户名或密码错误', 400)
      res.status(400).send(response)
    }
  }).catch(err => {
    res.status(500).send('数据库连接出错!')
  })
})

// 修改密码
app.post('/updatePassword', (req, res) => {
  let sql = `update userinfo set password = '${req.body.newPassword}' where username = '${req.body.username}'`
  conMysql(sql).then(result => {
    if (result.affectedRows == 1) {
      let response = new Response(true, '修改成功', 200, result)
      res.send(response)
    } else {
      let response = new Response(false, '修改失败,请稍后重试', 400)
      res.status(400).send(response)
    }
  }).catch(err => {
    res.status(500).send('数据库连接出错!')
  })
})

// 获取当前用户信息
app.get('/getUserInfo', (req, res) => {
  let sql = `select * from userinfo where username = '${req.query.username}'`
  conMysql(sql).then(result => {
    let response = new Response(true, '获取成功', 200, result)
    res.send(response)
  }).catch(err => {
    res.status(500).send('数据库连接出错!')
  })
})