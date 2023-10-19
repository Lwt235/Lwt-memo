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

