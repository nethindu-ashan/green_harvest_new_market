const mongoose =
require("mongoose")

const farmerSchema =
new mongoose.Schema(

{

user:{

type:
mongoose.Schema
.Types
.ObjectId,

ref:
"User",

required:
true,

unique:
true

},

farmName:{

type:
String,

required:
true

},

district:{

type:
String,

required:
true

},

phone:{

type:
String,

required:
true

},

verified:{

type:
Boolean,

default:
false

}

},

{

timestamps:
true

}

)

module.exports =
mongoose.model(
"Farmer",
farmerSchema
)