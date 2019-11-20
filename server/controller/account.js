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
            res.send({code: -1, msg: "服务异常"});
            return;
        }

        res.send({code: 0});
    });

    CONNECTION.end();
});

router.get("/detail", function (req, res) {
    let params = req.query;
    if(isNaN(params.id)){ // 参数异常
        res.send({code: 1001, msg: "参数异常"});
        return;
    }

    let query = "SELECT * FROM dd LEFT JOIN aa ON aa.id = dd.uid WHERE aa.id = ?";
    let queryParams = [Number(params.id)];

    CONNECTION = mysql.createConnection(CONFIG.MYSQL_CONNECTION);
    CONNECTION.connect();
    CONNECTION.query(query, queryParams, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res.send({code: -1, msg: "服务异常"});
            return;
        }

        res.send({code: 0, result: result});
    });
    CONNECTION.end();
});


module.exports = router;
