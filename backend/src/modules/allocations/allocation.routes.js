const router =
require("express")
.Router()

const controller =
require(
"./allocation.controller"
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
"ADMIN"
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