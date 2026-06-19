const Hub =
require("../hubs/hub.model")

const assignHub =
async(district)=>{

const hub =
await Hub.findOne({

district:district

})

if(!hub){

throw new Error("No hub found for district")

}

return hub

}

module.exports =
{
assignHub
}