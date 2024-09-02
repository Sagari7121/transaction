const calculateExpense=require('../services/expense.service');
const fetchData= require('../services/ethereum.service');


const fetchExpense=async (req,res,next) => {
  const address= req.params.address;
  if(!address){
    res.status(400).send({error: "Address is required"});
  }
  try{
    const expense= await calculateExpense(address);
    const price=await fetchData();
    res.send({
      address,
      totalExpense: expense,
      etherPrice: price,
    })
  }catch(err){
    res.status(500).send({error: "Something went wrong"});
  }
}

module.exports=fetchExpense;