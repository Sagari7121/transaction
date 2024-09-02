const express=require('express');
const transactionRouter=require('./transaction.routes');

const router=express.Router();

router.use('/address', transactionRouter);

module.exports=router;