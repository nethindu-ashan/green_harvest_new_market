const Order =
require("../orders/order.model")

const Payment =
require("../payments/payment.model")

const Delivery =
require("../delivery/delivery.model")

const getDashboard =
async()=>{

const totalOrders =
await Order.countDocuments()

const totalPayments =
await Payment.countDocuments()

const totalRevenue =
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

const totalProfit =
await Payment.aggregate([

{
$group:{
_id:null,
profit:{
$sum:"$companyProfit"
}
}
}

])

const deliveryCount =
await Delivery.countDocuments()

return {

totalOrders,

totalPayments,

totalRevenue:
totalRevenue[0]?.total || 0,

totalProfit:
totalProfit[0]?.profit || 0,

deliveryCount

}

}

module.exports={
getDashboard
}