const Payment =
require("../payments/payment.model")

const Settlement =
require("../settlements/settlement.model")

const Delivery =
require("../delivery/delivery.model")

const getProfitReport =
async()=>{

// 💰 TOTAL REVENUE
const revenue =
await Payment.aggregate([

{
$group:{
_id:null,
total:{
$sum:"$buyerAmount"
}
}
}

])

// 💸 FARMER COST
const farmerCost =
await Settlement.aggregate([

{
$group:{
_id:null,
total:{
$sum:"$amount"
}
}
}

])

// 🚚 DELIVERY COST (simple estimate)
const deliveryCost =
await Delivery.countDocuments() * 500

const totalRevenue =
revenue[0]?.total || 0

const totalFarmerCost =
farmerCost[0]?.total || 0

const totalCost =
totalFarmerCost + deliveryCost

const profit =
totalRevenue - totalCost

return {

totalRevenue,
totalFarmerCost,
deliveryCost,
totalCost,
profit

}

}

module.exports =
{
getProfitReport
}