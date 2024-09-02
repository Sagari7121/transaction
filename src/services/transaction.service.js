const axios=require('axios');
const UserTransaction = require("../model/userTransaction.model");

const fetchTransaction = async (address) => {
  let transactions= await fetchDataFromEther(address);
  let userTransactions = await UserTransaction.findOne({ address });
  
  if (!userTransactions) {
    userTransactions = await UserTransaction.create({ address, transactions });
  } else {
    let filteredTransaction = userTransactions.transactions.filter(
      (transaction) =>
        !userTransactions.transactions.some((item) => item.hash === transaction.hash)
    );
    userTransactions.transactions.push(...filteredTransaction);
    await userTransactions.save();
  }
  return userTransactions;
};
const fetchDataFromEther=async(address) => {

    const api ="2TUETJTXV5BDXTE3U492JB7YMGR28Y2GTH";
    const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${api}`;

    const response= await axios.get(url);

    if(response.data.status!=='1'){
      res.status(404).send();
    }
}

module.exports=fetchTransaction;
