const Order =
require("./order.model")

const Inventory =
require("../inventory/inventory.service")

const create =
async(data)=>{

// reserve stock first
for(const item of data.items){

await Inventory.reserveStock(
item.productName,
item.quantityKg
)

}

return await Order.create(data)

}

// 🔥 CANCEL ORDER + RESTORE STOCK
const cancel =
async(orderId)=>{

const order =
await Order.findById(orderId)

if(!order){

throw new Error("Order not found")

}

// release reserved stock
for(const item of order.items){

await Inventory.releaseStock(
item.productName,
item.quantityKg
)

}

order.status = "CANCELLED"

await order.save()

return order

}

const list =
async()=>{

return await Order.find()
.populate("buyer")
.populate("hub")

}

module.exports =
{
create,
list,
cancel
}