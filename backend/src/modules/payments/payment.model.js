const mongoose =
require("mongoose")

const paymentSchema =
new mongoose.Schema(

{

order:{

type:
mongoose.Schema.Types.ObjectId,

ref:"Order",

required:true

},

buyerAmount:{

type:Number,

required:true

},

farmerAmount:{

type:Number,

required:true

},

logisticsCost:{

type:Number,

required:true

},

companyProfit:{

type:Number,

required:true

},

status:{

type:String,

enum:["PENDING","PAID","SETTLED"],

default:"PENDING"

}

},

{

timestamps:true

}

)

module.exports =
mongoose.model(
"Payment",
paymentSchema
)