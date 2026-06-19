const Delivery =
require("./delivery.model")

const createBatchDelivery =
async(data)=>{

const deliveries = []

for(const orderId of data.orders){

const delivery =
await Delivery.create({

order:orderId,
hub:data.hub,
packagingEmployee:data.packagingEmployee,
driver:data.driver,
status:"PACKAGING"

})

deliveries.push(delivery)

}

return deliveries

}

module.exports =
{
createBatchDelivery
}