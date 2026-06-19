const service =
require("./pricing.service")

const pricing =
async(req,res)=>{

try{

const data =
await service.getPricing()

res.json(data)

}catch(error){

res.status(500).json({
message:error.message
})

}

}

module.exports =
{
pricing
}