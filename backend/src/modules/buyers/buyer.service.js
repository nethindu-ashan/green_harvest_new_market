const Buyer =
require(
"./buyer.model"
)

const create =
async(
data
)=>{

return await Buyer
.create(
data
)

}

const list =
async()=>{

return await Buyer
.find()
.populate(

"user",

"fullName email role"

)

}

module.exports={

create,

list

}