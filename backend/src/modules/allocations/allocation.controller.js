const service =
require(
"./allocation.service"
)

const Order =
require(
"../orders/order.model"
)

const Harvest =
require(
"../harvest/harvest.model"
)

const create =
async(
req,
res
)=>{

try{

const order =
await Order
.findById(

req.body.order

)

if(
!order
){

return res
.status(404)
.json({

message:
"Order not found"

})

}

const harvest =
await Harvest
.findById(

req.body.harvest

)

if(
!harvest
){

return res
.status(404)
.json({

message:
"Harvest not found"

})

}

const allocation =
await service
.create({

order:
order._id,

harvest:
harvest._id,

allocatedKg:
req.body.allocatedKg

})

order.status =
"ALLOCATED"

await order
.save()

res
.status(201)
.json(
allocation
)

}

catch(error){

res
.status(500)
.json({

message:
error.message

})

}

}

const list =
async(
req,
res
)=>{

const data =
await service
.list()

res
.json(
data
)

}

module.exports={

create,

list

}