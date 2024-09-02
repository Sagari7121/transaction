require("dotenv").config();
const axios=require('axios');
const fetchTransaction = require("../services/transaction.service");

const transactionController =async (req, res, next) => {
  try {
    const address= req.params.addressValue;
    const api ="2TUETJTXV5BDXTE3U492JB7YMGR28Y2GTH";
    const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${api}`;

    const response= await axios.get(url);

    if(response.data.status!=='1'){
      res.status(404).send('Error fetching data from Etherscan');
    }

    const user=await fetchTransaction(address, response.data.result);
    res.status(201).send(user);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports=transactionController;
