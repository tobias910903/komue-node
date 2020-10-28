const express = require("express");
const router = express.Router();
const db = require('../mysql');
const md5 = require('md5-node');

router.post("/register", function (req, res) {
    let params = req.query;

    db.query({
        req: req,
        res: res,
        sql: "INSERT INTO user(id,username,password) VALUES (0,?,?)",
        sqlParams: [params.username, md5(params.password)]
    }, function(result){
        res.send({code: 0});
    });
});

router.get("/detail", function (req, res) {
    let params = req.query;
    if(!params.id){ // 参数异常
        res.send({code: 1001, msg: "参数异常"});
        return;
    }

    db.query({
        req: req,
        res: res,
        sql: "SELECT * FROM table LEFT JOIN aa ON aa.id = dd.uid WHERE aa.id = ?",
        sqlParams: [params.id]
    }, function(result){
        res.send({code: 0, result: result});
    });
});


module.exports = router;
