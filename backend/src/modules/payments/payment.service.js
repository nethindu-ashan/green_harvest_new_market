const Payment =
require("./payment.model")

const create =
async(data)=>{

return await Payment.create(data)

}

const list =
async()=>{

return await Payment.find()
.populate("order")

}

module.exports={create,list}