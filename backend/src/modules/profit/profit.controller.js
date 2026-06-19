const service =
require("./profit.service")

const report =
async(req,res)=>{

try{

const data =
await service.getProfitReport()

res.json(data)

}catch(error){

res.status(500).json({
message:error.message
})

}

}

module.exports =
{
report
}