const express=require('express');
const transactionRouter=require('./transaction.routes');
const ethereumPriceRouter=require('./ethereumPrice.routes')

const router=express.Router();

router.use('/address', transactionRouter);
router.use('/ethereumPrice', ethereumPriceRouter);

module.exports=router;