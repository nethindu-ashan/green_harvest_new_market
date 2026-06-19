const Allocation =
require(
"./allocation.model"
)

const create =
async(
data
)=>{

return await Allocation
.create(
data
)

}

const list =
async()=>{

return await Allocation
.find()

.populate(
"order"
)

.populate(
"harvest"
)

}

module.exports={

create,

list

}