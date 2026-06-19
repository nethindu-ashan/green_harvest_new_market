const mongoose =
require("mongoose")

const buyerSchema =
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

companyName:{

type:
String,

required:
true

},

buyerType:{

type:
String,

enum:[

"HOTEL",

"RESTAURANT",

"SUPERMARKET",

"CHAIN",

"FACTORY",

"WHOLESALE"

],

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

monthlyDemandKg:{

type:
Number,

default:
0

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
"Buyer",
buyerSchema
)