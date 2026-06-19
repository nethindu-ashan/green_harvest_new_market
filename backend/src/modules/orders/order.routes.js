const router =
require("express").Router()

const controller =
require("./order.controller")

const auth =
require("../../middleware/auth.middleware")

const roles =
require("../../middleware/role.middleware")

router.post(
"/",
auth,
roles("BUYER"),
controller.create
)

router.get(
"/",
auth,
roles("ADMIN"),
controller.list
)

// 🔥 CANCEL ORDER
router.patch(
"/:id/cancel",
auth,
roles("BUYER","ADMIN"),
controller.cancel
)

module.exports =
router