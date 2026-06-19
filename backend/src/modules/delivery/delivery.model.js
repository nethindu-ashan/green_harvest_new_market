const mongoose =
require("mongoose")

const deliverySchema =
new mongoose.Schema(

{

order:{

type:
mongoose.Schema.Types.ObjectId,

ref:"Order",

required:true

},

hub:{

type:
mongoose.Schema.Types.ObjectId,

ref:"Hub",

required:true

},

packagingEmployee:{

type:
mongoose.Schema.Types.ObjectId,

ref:"Employee",

required:true

},

driver:{

type:
mongoose.Schema.Types.ObjectId,

ref:"Employee",

required:true

},

status:{

type:String,

enum:[
"PACKAGING",
"READY",
"DISPATCHED",
"DELIVERED"
],

default:"PACKAGING"

}

},

{

timestamps:true

}

)

module.exports =
mongoose.model(
"Delivery",
deliverySchema
)