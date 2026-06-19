const Delivery =
require("./delivery.model")

const create =
async(data)=>{

return await Delivery.create(data)

}

const list =
async()=>{

return await Delivery.find()
.populate("order")
.populate("hub")
.populate("packagingEmployee")
.populate("driver")

}

const updateStatus =
async(id,status)=>{

return await Delivery.findByIdAndUpdate(

id,
{status},
{new:true}

)

}

module.exports =
{
create,
list,
updateStatus
}