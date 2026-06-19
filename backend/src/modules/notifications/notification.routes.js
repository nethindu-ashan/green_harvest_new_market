const router =
require("express").Router()

const controller =
require("./notification.controller")

const auth =
require("../../middleware/auth.middleware")

const roles =
require("../../middleware/role.middleware")

router.post(
"/",
auth,
roles("ADMIN"),
controller.create
)

router.get(
"/",
auth,
controller.list
)

router.patch(
"/:id/read",
auth,
controller.markRead
)

module.exports =
router