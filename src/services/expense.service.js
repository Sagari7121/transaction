const UserTransaction = require("../model/userTransaction.model");
const fetchTransaction=require('../services/transaction.service');

const calculateExpense = async (address) => {
  let userTransactions = await fetchTransaction(address);

  if (!userTransactions) {
    throw new Error("Address not found");
  }
  const totalExpense =userTransactions.transactions.reduce((total, tx) => {
    const expense = (parseInt(tx.gasUsed) * parseInt(tx.gasPrice)) / 1e18;
    return total + expense;
  }, 0);

  return totalExpense;
};

module.exports=calculateExpense;
