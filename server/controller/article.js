const express = require("express");
const router = express.Router();

router.get("/list",function (req,res) {
  res.send("列表")
});

router.get("/detail",function (req,res) {
  res.send("详情")
});


module.exports = router;
