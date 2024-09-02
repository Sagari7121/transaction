const axios = require("axios");
const cron=require('node-cron');
const EthereumPrice = require("../model/ethereumPrice.model");

const fetchEtherPrice = async () => {
  const url =
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr";
  const response = await axios.get(url);

  if (response.status === 200) {
    console.log(response.data.ethereum.inr);
    return response.data.ethereum.inr;
  }
  return null;
};

const fetchAndStoreEthereumPrice = async() => {
  try {
    const price=await fetchEtherPrice();
    const newPrice=await EthereumPrice.create({price: price});
    await newPrice.save();
  } catch (error) {
    console.error("Error:", error);
  }
}

cron.schedule("*/10 * * * *", fetchAndStoreEthereumPrice);

module.exports = fetchEtherPrice;
