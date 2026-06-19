const mongoose =
require("mongoose")

const inventorySchema =
new mongoose.Schema(

{

productName:{

type:String,
required:true

},

totalKg:{

type:Number,
required:true

},

reservedKg:{

type:Number,
default:0

}

},

{

timestamps:true

}

)

inventorySchema.virtual("availableKg").get(function(){

return this.totalKg - this.reservedKg

})

module.exports =
mongoose.model(
"Inventory",
inventorySchema
)