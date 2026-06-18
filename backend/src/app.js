const express =
require("express")

const cors =
require("cors")

const helmet =
require("helmet")

const userRoutes =
require(
"./modules/users/user.routes"
)

const authRoutes =
require("./modules/auth/auth.routes")

const farmerRoutes =
require(
"./modules/farmers/farmer.routes"
)

const harvestRoutes =
require(
"./modules/harvest/harvest.routes"
)

const buyerRoutes =
require(
"./modules/buyers/buyer.routes"
)

const app =
express()

app.use(
express.json()
)

app.use(
cors()
)

app.use(
helmet()
)

app.get(
"/",
(req,res)=>{

res.send(
"GreenHarvest API Running"
)

}
)

app.use(
"/api/users",
userRoutes
)

app.use(
"/api/auth",
authRoutes
)

app.use(
"/api/farmers",
farmerRoutes
)

app.use(
"/api/harvest",
harvestRoutes
)

app.use(
"/api/buyers",
buyerRoutes
)

module.exports =
app