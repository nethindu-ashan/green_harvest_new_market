const service =
require("./analytics.service")

const dashboard =
async(req,res)=>{

try{

const data =
await service.getDashboard()

res.json(data)

}catch(error){

res.status(500).json({
message:error.message
})

}

}

module.exports={
dashboard
}