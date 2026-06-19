const bcrypt =
require("bcryptjs")

const jwt =
require("jsonwebtoken")

const User =
require("../users/user.model")

const registerUser =
async(data)=>{

// 1. hash password
const hashedPassword =
await bcrypt.hash(
data.password,
10
)

// 2. create user
const user =
await User.create({
...data,
password: hashedPassword
})

return user
}

const loginUser =
async(data)=>{

const user =
await User.findOne({
email:data.email
})

if(!user){
throw new Error("User not found")
}

// compare password
const isMatch =
await bcrypt.compare(
data.password,
user.password
)

if(!isMatch){
throw new Error("Invalid password")
}

// generate token
const token =
jwt.sign(
{
id:user._id,
role:user.role
},
"SECRET_KEY",
{expiresIn:"7d"}
)

return {
user,
token
}

}

module.exports =
{
registerUser,
loginUser
}