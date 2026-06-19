const service =
require(
"./employee.service"
)

const create =
async(
req,res
)=>{

try{

const data =
await service
.create(
req.body
)

res
.status(201)
.json(
data
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
req,res
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