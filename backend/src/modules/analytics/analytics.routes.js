const router =
require("express").Router()

const controller =
require("./analytics.controller")

const auth =
require("../../middleware/auth.middleware")

const roles =
require("../../middleware/role.middleware")

router.get(

"/dashboard",

auth,

roles("ADMIN"),

controller.dashboard

)

module.exports =
router