const router =
require("express").Router()

const controller =
require("./delivery.controller")

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
roles("ADMIN"),
controller.list
)

router.patch(
"/:id/status",
auth,
roles("ADMIN"),
controller.updateStatus
)

router.post(
"/batch",
auth,
roles("ADMIN"),
controller.createBatch
)

module.exports =
router