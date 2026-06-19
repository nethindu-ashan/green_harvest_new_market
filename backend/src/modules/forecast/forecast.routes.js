const router =
require("express").Router()

const controller =
require("./forecast.controller")

const auth =
require("../../middleware/auth.middleware")

const roles =
require("../../middleware/role.middleware")

router.get(
"/demand",
auth,
roles("ADMIN"),
controller.forecast
)

module.exports =
router