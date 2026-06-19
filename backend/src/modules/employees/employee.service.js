const Employee =
require(
"./employee.model"
)

const create =
async(
data
)=>{

return await Employee
.create(
data
)

}

const list =
async()=>{

return await Employee
.find()

}

module.exports={

create,

list

}