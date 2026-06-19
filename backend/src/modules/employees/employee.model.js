const mongoose =
require(
"mongoose"
)

const employeeSchema =
new mongoose.Schema(

{

fullName:{

type:String,

required:true

},

phone:{

type:String,

required:true

},

role:{

type:String,

enum:[

"PACKAGING",

"COLLECTION",

"DRIVER",

"OPERATIONS"

],

required:true

},

salary:{

type:Number,

required:true

},

active:{

type:Boolean,

default:true

}

},

{

timestamps:true

}

)

module.exports =
mongoose.model(

"Employee",

employeeSchema

)