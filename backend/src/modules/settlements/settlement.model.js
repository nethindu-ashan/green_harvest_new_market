const mongoose =
require("mongoose")

const settlementSchema =
new mongoose.Schema(

{

farmer:{

type:
mongoose.Schema.Types.ObjectId,

ref:"Farmer",

required:true

},

order:{

type:
mongoose.Schema.Types.ObjectId,

ref:"Order",

required:true

},

amount:{

type:Number,

required:true

},

status:{

type:String,

enum:[
"PENDING",
"PAID"
],

default:"PENDING"

}

},

{

timestamps:true

}

)

module.exports =
mongoose.model(
"Settlement",
settlementSchema
)