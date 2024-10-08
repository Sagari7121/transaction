const mongoose = require('mongoose');

const ethereumPriceSchema = new mongoose.Schema({
  price: { type: Number, required: true },
  timeStamp: { type: Date, default: Date.now }
});

const EthereumPrice = mongoose.model('EthereumPrice', ethereumPriceSchema);

module.exports = EthereumPrice;