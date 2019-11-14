// app.js
const fs = require('fs');
const path = require('path');
const express = require('express');
const chalk = require('chalk');
const app = express();
let CONFIG = require('./server/config');

app.use(express.static(path.resolve(__dirname, './dist')));	// 生产环境目录

app.get('/', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8');	// 生产环境目录index文件
    res.send(html)
});

// 测试接口
app.get('/test', function (req, res) {
	res.json({user:'test'});
});

// 引入 route
const route = require("./server/route");
app.use("/api", route);

app.listen(CONFIG.PORT, res => {
	console.log(chalk.yellow('服务启动成功', "环境：",CONFIG.ENV, "端口号：", CONFIG.PORT));
});
