const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const md5 = require('md5-node');
const CONFIG = require("../config");
let CONNECTION;

// Nodejs + Mysql DEMO

router.post("/register", function (req, res) {

    CONNECTION = mysql.createConnection(CONFIG.MYSQL_CONNECTION);
    CONNECTION.connect();

    let add = 'INSERT INTO user(id,username,password) VALUES (0,?,?)'; // SQL
    let addParams = [params.username, md5(params.password)];

    CONNECTION.query(add, addParams, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            res.send({code: 500, msg: "服务异常"});
            return;
        }

        res.send({code: 200});
    });

    CONNECTION.end();
});

router.post("/login", function (req, res) {
    CONNECTION = mysql.createConnection(CONFIG.MYSQL_CONNECTION);
    CONNECTION.connect();

    let params = req.body;
    let query = "SELECT * FROM user WHERE username = ? AND password = ?";
    let queryParams = [params.username, md5(params.password)];

    CONNECTION.query(query, queryParams, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res.send({code: 500, msg: "服务异常"});
            return;
        }

        if(result.length == 0){
            res.send({code: 501, msg: "用户名或密码错误"});
        }else{
            res.send({code: 200});
        }
    });

    CONNECTION.end();
});


module.exports = router;
