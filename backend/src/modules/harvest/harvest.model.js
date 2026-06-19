const mongoose =
require("mongoose")

const harvestSchema =
new mongoose.Schema(

{

farmer:{

type:
mongoose.Schema
.Types
.ObjectId,

ref:
"Farmer",

required:
true

},

productName:{

type:
String,

required:
true

},

quantityKg:{

type:
Number,

required:
true

},

pricePerKg:{

type:
Number,

required:
true

},

available:{

type:
Boolean,

default:
true

}

},

{

timestamps:
true

}

)

module.exports =
mongoose.model(
"Harvest",
harvestSchema
)