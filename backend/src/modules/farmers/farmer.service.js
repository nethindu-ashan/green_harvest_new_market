const Farmer =
require(
"./farmer.model"
)

const create =
async(
data
)=>{

return await Farmer
.create(
data
)

}

const list =
async()=>{

return await Farmer
.find()
.populate(
"user",
"fullName email role"
)

}

module.exports = {

create,

list

}