const service =
require("./notification.service")

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
await service.listByUser(req.user.id)

res.json(data)

}catch(error){

res.status(500).json({
message:error.message
})

}

}

const markRead =
async(req,res)=>{

try{

const data =
await service.markRead(req.params.id)

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
markRead
}