const express = require("express");
const router = express.Router();
const db = require('../mysql');

router.get("/list",function (req,res) {
  res.send("列表")
});

router.get("/detail",function (req,res) {
  res.send("详情")
});

router.get("/testSql", function (req, res) {
    db.query({
        req: req,
        res: res,
        sql: "SELECT * FROM table",
        sqlParams: []
    }, function(result){
        res.send({code: 0, result: result});
    });
});

module.exports = router;
