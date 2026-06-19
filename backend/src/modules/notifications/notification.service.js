const Notification =
require("./notification.model")

const create =
async(data)=>{

const notification =
await Notification.create(data)

// 🔥 REAL-TIME PUSH
if(global.io && data.user){

global.io.to(data.user.toString()).emit(
"notification",
notification
)

}

return notification

}

const listByUser =
async(userId)=>{

return await Notification.find({
user:userId
}).sort({createdAt:-1})

}

const markRead =
async(id)=>{

return await Notification.findByIdAndUpdate(
id,
{read:true},
{new:true}
)

}

module.exports =
{
create,
listByUser,
markRead
}