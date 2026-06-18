const service =
require(
"./harvest.service"
)

const Farmer =
require(
"../farmers/farmer.model"
)

const create =
async(
req,
res
)=>{

try{

const farmer =
await Farmer
.findOne({

user:
req.user.id

})

if(
!farmer
){

return res
.status(404)
.json({

message:
"Farmer profile not found"

})

}

const harvest =
await service
.create({

...req.body,

farmer:
farmer._id

})

res
.status(201)
.json(
harvest
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