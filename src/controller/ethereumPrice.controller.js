const fetchData=require('../services/ethereum.service');

const fetchEthereumPrice= async (req, res, next) => {
   const price=await fetchData();
   res.send({ethereumPrice: price});
}

module.exports=fetchEthereumPrice;