const Order =
require("../orders/order.model")

const getPricing =
async()=>{

const orders =
await Order.find()

const map = {}

for(const order of orders){

for(const item of order.items){

if(!map[item.productName]){

map[item.productName] = 0

}

map[item.productName] += item.quantityKg

}

}

const pricing = Object.keys(map).map(product=>{

const demand = map[product]

// 💡 SIMPLE PRICE MODEL
let basePrice = 100

let price = basePrice

if(demand > 5000){
price += 50
}

if(demand > 10000){
price += 100
}

if(demand < 2000){
price -= 20
}

return {

product,
demand,
suggestedPricePerKg: price

}

})

return pricing

}

module.exports =
{
getPricing
}