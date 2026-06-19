const router =
require("express").Router()

const controller =
require("./hub.controller")

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

router.get(
"/:id",
auth,
roles("ADMIN"),
controller.getById
)

router.delete(
"/:id",
auth,
roles("ADMIN"),
controller.remove
)

module.exports =
router