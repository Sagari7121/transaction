const express=require('express');
const transactionRouter=require('./transaction.routes');
const ethereumPriceRouter=require('./ethereumPrice.routes')
const expenseRouter=require('./expense.routes');

const router=express.Router();

router.use('/address', transactionRouter);
router.use('/ethereumPrice', ethereumPriceRouter);
router.use('/expense',expenseRouter)

module.exports=router;