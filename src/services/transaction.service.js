const UserTransaction = require("../model/userTransaction.model");

const fetchTransaction = async (address, transactions) => {
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

module.exports=fetchTransaction;
