const service =
require("./order.service")

const hubService =
require("../hubs/hubAssignment.service")

const Buyer =
require("../buyers/buyer.model")

const create =
async(req,res)=>{

try{

const buyer =
await Buyer.findOne({
user:req.user.id
})

if(!buyer){

return res.status(404).json({
message:"Buyer not found"
})

}

// auto hub assign
const hub =
await hubService.assignHub(
req.body.district
)

const order =
await service.create({

buyer:buyer._id,
items:req.body.items,
hub:hub._id

})

res.status(201).json(order)

}catch(error){

res.status(500).json({
message:error.message
})

}

}

const list =
async(req,res)=>{

try{

const data =
await service.list()

res.json(data)

}catch(error){

res.status(500).json({
message:error.message
})

}

}

// 🔥 CANCEL ENDPOINT
const cancel =
async(req,res)=>{

try{

const data =
await service.cancel(req.params.id)

res.json({
message:"Order cancelled + stock restored",
data
})

}catch(error){

res.status(500).json({
message:error.message
})

}

}

module.exports =
{
create,
list,
cancel
}