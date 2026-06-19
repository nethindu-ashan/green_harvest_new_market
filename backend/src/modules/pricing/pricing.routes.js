const router =
require("express").Router()

const controller =
require("./pricing.controller")

const auth =
require("../../middleware/auth.middleware")

const roles =
require("../../middleware/role.middleware")

router.get(
"/",
auth,
roles("ADMIN"),
controller.pricing
)

module.exports =
router