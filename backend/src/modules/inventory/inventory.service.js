const Inventory =
require("./inventory.model")

const findByProduct =
async(productName)=>{

return await Inventory.findOne({productName})

}

const reserveStock =
async(productName, qty)=>{

const item =
await Inventory.findOne({productName})

if(!item){

throw new Error("Product not found")

}

if(item.totalKg - item.reservedKg < qty){

throw new Error("Insufficient stock")

}

item.reservedKg += qty

await item.save()

return item

}

const releaseStock =
async(productName, qty)=>{

const item =
await Inventory.findOne({productName})

if(item){

item.reservedKg -= qty

if(item.reservedKg < 0)
item.reservedKg = 0

await item.save()

}

}

module.exports =
{
findByProduct,
reserveStock,
releaseStock
}