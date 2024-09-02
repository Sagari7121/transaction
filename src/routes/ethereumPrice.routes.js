const router=require('express').Router();
const fetchEthereumPrice= require('../controller/ethereumPrice.controller');

router.get('/', fetchEthereumPrice)
module.exports=router;