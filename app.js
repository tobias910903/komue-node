// app.js
const fs = require('fs');
const path = require('path');
const express = require('express');
const chalk = require('chalk');
const app = express();
let CONFIG = require('./server/api');

console.log("当前开发环境：", CONFIG.ENV);

app.use(express.static(path.resolve(__dirname, './dist')))	// 生产环境目录

app.get('/', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')	// 生产环境目录index文件
    res.send(html)
})

// 测试接口
app.get(CONFIG.URL.test, function (req, res) {
	res.send({user:'test'});
});

app.listen(10086, res => { // 端口
	console.log(chalk.yellow('服务启动，端口号为：10086'));
});