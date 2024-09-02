const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  blockNumber: { type: String,  },
  timeStamp: { type: String },
  hash: { type: String, unique: true },
  nonce: { type: String },
  blockHash: { type: String },
  transactionIndex: { type: String},
  from: { type: String },
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
