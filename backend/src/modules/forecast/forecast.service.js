const Order =
require("../orders/order.model")

const getDemandForecast =
async()=>{

// last 30 days orders
const orders =
await Order.find()

// simple aggregation by product
const map = {}

for(const order of orders){

for(const item of order.items){

if(!map[item.productName]){

map[item.productName] = 0

}

map[item.productName] += item.quantityKg

}

}

// convert to forecast
const forecast = Object.keys(map).map(key=>{

const avgDaily = map[key] / 30

return {

product: key,
totalDemandLast30Days: map[key],
estimatedDailyDemand: avgDaily,
estimatedMonthlyDemand: avgDaily * 30

}

})

return forecast

}

module.exports =
{
getDemandForecast
}