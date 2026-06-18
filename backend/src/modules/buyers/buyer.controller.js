const service =
require(
"./buyer.service"
)

const create =
async(
req,
res
)=>{

try{

const buyer =
await service
.create({

...req.body,

user:
req.user.id

})

res
.status(201)
.json(
buyer
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