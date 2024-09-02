const UserTransaction = require("../model/userTransaction.model");

const fetchTransaction = async (address, transactions) => {
  let user = await UserTransaction.findOne({ address });

  if (!user) {
    user = await UserTransaction.create({ address, transactions });
  } else {
    let updatedTransaction = user.transactions.filter(
      (transaction) =>
        !user.transactions.some((item) => item.hash === transaction.hash)
    );
    user.transactions.push(...updatedTransaction);
    await user.save();
  }
  return user;
};

module.exports=fetchTransaction;
