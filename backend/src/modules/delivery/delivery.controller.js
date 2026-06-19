const service =
require("./delivery.service")

const batchService =
require("./deliveryBatch.service")

const create =
async(req,res)=>{

try{

const data =
await service.create(req.body)

res.status(201).json(data)

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

const updateStatus =
async(req,res)=>{

try{

const data =
await service.updateStatus(
req.params.id,
req.body.status
)

res.json(data)

}catch(error){

res.status(500).json({
message:error.message
})

}

}

const createBatch =
async(req,res)=>{

try{

const data =
await batchService.createBatchDelivery(req.body)

res.status(201).json(data)

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
updateStatus,
createBatch
}