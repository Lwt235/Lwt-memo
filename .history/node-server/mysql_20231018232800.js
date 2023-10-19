/*
 * @Author: maximing
 * @Date: 2022-12-28 09:33:17
 * @LastEditTime: 2022-12-28 09:52:00
 * @LastEditors: your name
 * @Description: 请添加描述
 * @FilePath: \domysql\src\server\mysql.js
 */
 
const mySql = require('mysql')
//连接数据库的配置信息
const db_config = { 
	host: 'localhost', //本地都是localhost
	user: 'root', //账户名
	password: 'Yy5201314', //密码
	port: '3306', //端口号
	database: 'test' //数据库的名称
}
 
function conMysql(sql) {
    //创建数据库连接池
	let Myconnect = mysql.createConnection(db_config)
	//开始连接数据库
	Myconnect.connect(function (err) {
		if (err) {
			console.log(`myqsl连接失败:${err}!`)
		} else {
			console.log('恭喜哦，mysql连接成功哦')
		}
	})
 
	//因为query查询是一个异步操作，所以用promise来操作
	return new Promise((resolve, reject) => {
        //query() 函数用于mysql语句查询
		Myconnect.query(sql, (err, result) => {
			if (err) {
				reject(err)
			} else {
				let res = JSON.parse(JSON.stringify(result))
				closeMysql(connect)  //调用函数关闭mysql连接
				resolve(res)
			}
		});
	})
}
 
//关闭mysql数据库的函数
function closeMysql(Myconnect) {
	Myconnect.end((err) => {
		if (err) {
			console.log(`mysql关闭失败:${err}!`)
		} else {
			console.log('mysql关闭成功')
		}
	})
}
 
//导出conMysql函数
exports.conMysql = conMysql