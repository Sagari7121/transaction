const router=require('express').Router();
const fetchExpense= require('../controller/expense.controller');

router.get('/:address', fetchExpense)

module.exports=router;