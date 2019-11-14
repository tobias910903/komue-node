const express = require("express");
const router = express.Router();

const account = require("./controller/account");
const article = require("./controller/article");

router.use("/account", account);
router.use("/article", article);

module.exports = router;
