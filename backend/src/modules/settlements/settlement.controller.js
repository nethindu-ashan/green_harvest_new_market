const service =
require("./settlement.service")

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

const markPaid =
async(req,res)=>{

try{

const data =
await service.markPaid(req.params.id)

res.json(data)

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
markPaid
}