// app_server.js
const fs = require('fs');
const path = require('path');
const express = require('express');
const chalk = require('chalk');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser'); /* post方法 */
const route = require("./server/route");
const CONFIG = require('./server/config');

// const redis = require('redis'); // 引入 redis
// const rdsClient = redis.createClient(CONFIG.REDIS_CONNECTION.PORT, CONFIG.REDIS_CONNECTION.HOST, CONFIG.REDIS_CONNECTION.OPTS);

// 测试一下redis
// rdsClient.get('test_redis' , function(err, resRds){
//     console.log(resRds);
// });

// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 使用 session 中间件
app.use(session({
    secret: 'lanme_server_2020', // 对session id 相关的cookie 进行签名
    resave: true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie: {
        maxAge : 1000 * 60 * 60 * 24 * 7 // 设置 session 的有效时间，单位毫秒
    }
}));

//  req.session.userName = 'testName';
//  req.session.userName = null;
//  req.session['userName'] = 'testName';

// 跨域处理
// app.use("*", function(req, res, next){
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header("Access-Control-Allow-Headers", "*");
//     res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
//     res.header('Access-Control-Allow-Credentials', true);
//     res.header("X-Powered-By", ' 1.0.1');
//     next();
// });

// 生产环境目录
app.use(express.static(path.resolve(__dirname, './www')));

// 生产环境目录index文件
app.get('/', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './www/index.html'), 'utf-8');
    res.send(html)
});

// 接口 route
app.use("/api", route);

app.listen(CONFIG.PORT_SERVER, "0.0.0.0", res => {
    console.log(chalk.yellow('服务启动成功', "环境：", CONFIG.ENV, "端口号：", CONFIG.PORT_SERVER));
});
