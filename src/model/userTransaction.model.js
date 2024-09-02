const mongoose=require('mongoose');

const {transactionSchema}=require('./transaction.model');

const userTransactionSchema = new mongoose.Schema({
    address: { type: String, required: true, unique: true },
    transactions: [transactionSchema]
  });
  
  const UserTransaction = mongoose.model('UserTransaction', userTransactionSchema);
  
  module.exports = UserTransaction;