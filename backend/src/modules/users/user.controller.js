const service =
require(
"./user.service"
)

const register =
async(
req,
res
)=>{

try{

const user =
await service
.createUser(
req.body
)

res
.status(201)
.json(user)

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

const users =
await service
.getUsers()

res.json(
users
)

}

module.exports = {

register,

list

}