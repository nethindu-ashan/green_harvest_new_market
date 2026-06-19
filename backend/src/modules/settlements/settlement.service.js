const Settlement =
require("./settlement.model")

const create =
async(data)=>{

return await Settlement.create(data)

}

const list =
async()=>{

return await Settlement.find()
.populate("farmer")
.populate("order")

}

const markPaid =
async(id)=>{

return await Settlement.findByIdAndUpdate(

id,
{status:"PAID"},
{new:true}

)

}

module.exports =
{
create,
list,
markPaid
}