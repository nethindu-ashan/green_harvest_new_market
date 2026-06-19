const mongoose =
require(
"mongoose"
)

const allocationSchema =
new mongoose.Schema(

{

order:{

type:
mongoose.Schema
.Types
.ObjectId,

ref:
"Order",

required:
true

},

harvest:{

type:
mongoose.Schema
.Types
.ObjectId,

ref:
"Harvest",

required:
true

},

allocatedKg:{

type:
Number,

required:
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

"Allocation",

allocationSchema

)