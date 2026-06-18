const User =
require(
"./user.model"
)

const createUser =
async(data)=>{

const user =
await User.create(
data
)

return user

}

const getUsers =
async()=>{

return await User.find()

}

module.exports = {

createUser,

getUsers

}