// app_server.js
const fs = require('fs');
const path = require('path');
const express = require('express');
const chalk = require('chalk');
const app = express();
const bodyParser = require('body-parser'); /* post方法 */
const route = require("./server/route");
const CONFIG = require('./server/config');

// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 生产环境目录
app.use(express.static(path.resolve(__dirname, './dist')));

// 生产环境目录index文件
app.get('/', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8');
    res.send(html)
});

// 接口 route
app.use("/api", route);

app.listen(CONFIG.PORT_SERVER, "0.0.0.0", res => {
    console.log(chalk.yellow('服务启动成功', "环境：", CONFIG.ENV, "端口号：", CONFIG.PORT_SERVER));
});
