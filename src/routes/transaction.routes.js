const express = require("express");

const router = express.Router();
const transactionController = require("../controller/transaction.controller");

router.get("/:addressValue", transactionController);

module.exports = router;
