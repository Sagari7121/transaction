require("dotenv").config();
const axios=require('axios');
const fetchTransaction = require("../services/transaction.service");

const transactionController =async (req, res, next) => {
  try {
    const address= req.params.addressValue;

    const userTransactions=await fetchTransaction(address);
    
    res.status(201).send(userTransactions);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports=transactionController;
