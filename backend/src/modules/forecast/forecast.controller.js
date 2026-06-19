const service =
require("./forecast.service")

const forecast =
async(req,res)=>{

try{

const data =
await service.getDemandForecast()

res.json(data)

}catch(error){

res.status(500).json({
message:error.message
})

}

}

module.exports =
{
forecast
}