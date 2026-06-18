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

module.exports =
app