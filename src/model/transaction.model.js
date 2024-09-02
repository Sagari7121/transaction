const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  blockNumber: { type: String, required: true },
  timeStamp: { type: String, required: true },
  hash: { type: String, required: true, unique: true },
  nonce: { type: String, required: true },
  blockHash: { type: String, required: true },
  transactionIndex: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, default: "" },
  value: { type: String, default: "" },
  gas: { type: String, default: "" },
  gasPrice: { type: String, default: "" },
  isError: { type: String, default: "" },
  txreceipt_status: { type: String, default: "" },
  input: { type: String, default: "" },
  contractAddress: { type: String, default: "" },
  cumulativeGasUsed: { type: String, default: "" },
  gasUsed: { type: String, default: "" },
  confirmations: { type: String, default: "" },
  methodId: { type: String, default: "" },
  functionName: { type: String, default: "" },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = { Transaction, transactionSchema };
