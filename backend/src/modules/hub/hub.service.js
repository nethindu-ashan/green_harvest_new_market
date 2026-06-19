const Hub =
require("./hub.model")

const create =
async(data)=>{

return await Hub.create(data)

}

const list =
async()=>{

return await Hub.find()

}

const getById =
async(id)=>{

return await Hub.findById(id)

}

const remove =
async(id)=>{

return await Hub.findByIdAndDelete(id)

}

module.exports =
{
create,
list,
getById,
remove
}