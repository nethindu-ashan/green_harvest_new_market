const router =
require("express").Router()

const controller =
require("./profit.controller")

const auth =
require("../../middleware/auth.middleware")

const roles =
require("../../middleware/role.middleware")

router.get(
"/report",
auth,
roles("ADMIN"),
controller.report
)

module.exports =
router