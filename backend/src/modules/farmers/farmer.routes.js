const router =
require("express")
.Router()

const controller =
require(
"./farmer.controller"
)

const auth =
require(
"../../middleware/auth.middleware"
)

const roles =
require(
"../../middleware/role.middleware"
)

router.post(

"/",

auth,

roles(
"FARMER"
),

controller.create

)

router.get(

"/",

auth,

roles(
"ADMIN"
),

controller.list

)

module.exports =
router