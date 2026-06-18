const service =
require("./auth.service")

const register =
async(req,res)=>{

try{

const user =
await service.registerUser(req.body)

res.status(201).json(user)

}
catch(err){

res.status(500).json({
message:err.message
})

}

}

const login =
async(req,res)=>{

try{

const result =
await service.loginUser(req.body)

res.json(result)

}
catch(err){

res.status(400).json({
message:err.message
})

}

}

module.exports =
{
register,
login
}