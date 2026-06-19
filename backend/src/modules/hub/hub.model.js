const mongoose =
require("mongoose")

const hubSchema =
new mongoose.Schema(

{

name:{

type:String,
required:true

},

district:{

type:String,
required:true

},

address:{

type:String,
required:true

}

},

{

timestamps:true

}

)

module.exports =
mongoose.model(
"Hub",
hubSchema
)