const router =
require("express")
.Router()

const controller =
require(
"./user.controller"
)

router.post(
"/register",
controller.register
)

router.get(
"/",
controller.list
)

module.exports =
router