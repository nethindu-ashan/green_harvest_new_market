const service =
require(
"./farmer.service"
)

const create =
async(
req,
res
)=>{

try{

const farmer =
await service
.create({

...req.body,

user:
req.user.id

})

res
.status(201)
.json(
farmer
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

const farmers =
await service
.list()

res
.json(
farmers
)

}

module.exports = {

create,

list

}