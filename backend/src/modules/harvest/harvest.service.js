const Harvest =
require(
"./harvest.model"
)

const create =
async(
data
)=>{

return await Harvest
.create(
data
)

}

const list =
async()=>{

return await Harvest
.find()
.populate({

path:
"farmer",

populate:{

path:
"user",

select:
"fullName"

}

})

}

module.exports={

create,

list

}