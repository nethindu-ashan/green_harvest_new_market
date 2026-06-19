const mongoose =
require("mongoose")

const orderSchema =
new mongoose.Schema({

buyer:{
type:mongoose.Schema.Types.ObjectId,
ref:"Buyer",
required:true
},

hub:{
type:mongoose.Schema.Types.ObjectId,
ref:"Hub"
},

items:[
{
productName:String,
quantityKg:Number
}
],

status:{
type:String,
enum:[
"PENDING",
"APPROVED",
"ALLOCATED"
],
default:"PENDING"
}

},{timestamps:true})

module.exports =
mongoose.model("Order",orderSchema)