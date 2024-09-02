const fetchEtherPrice = require("../services/ethereum.service");

const fetchEthereumPrice = async (req, res, next) => {
  const price = await fetchEtherPrice();
  res.send({ ethereumPrice: price });
};

module.exports = fetchEthereumPrice;
