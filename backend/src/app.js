const express =
require("express")

const cors =
require("cors")

const helmet =
require("helmet")

const app =
express()

// middleware
app.use(express.json())
app.use(cors())
app.use(helmet())

// test route
app.get("/", (req,res)=>{
res.send("GreenHarvest API Running")
})

/* =========================
   ROUTES
========================= */

const userRoutes =
require("./modules/users/user.routes")

const authRoutes =
require("./modules/auth/auth.routes")

const farmerRoutes =
require("./modules/farmers/farmer.routes")

const harvestRoutes =
require("./modules/harvest/harvest.routes")

const orderRoutes =
require("./modules/orders/order.routes")

const allocationRoutes =
require("./modules/allocations/allocation.routes")

const deliveryRoutes =
require("./modules/delivery/delivery.routes")

const paymentRoutes =
require("./modules/payments/payment.routes")

const analyticsRoutes =
require("./modules/analytics/analytics.routes")

const employeeRoutes =
require("./modules/employees/employee.routes")

const hubRoutes =
require("./modules/hubs/hub.routes")

const settlementRoutes =
require("./modules/settlements/settlement.routes")

const profitRoutes =
require("./modules/profit/profit.routes")

const forecastRoutes =
require("./modules/forecast/forecast.routes")

const pricingRoutes =
require("./modules/pricing/pricing.routes")

const notificationRoutes =
require("./modules/notifications/notification.routes")

/* =========================
   ROUTE MOUNTING
========================= */

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/farmers", farmerRoutes)
app.use("/api/harvest", harvestRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/allocations", allocationRoutes)

app.use("/api/delivery", deliveryRoutes)
app.use("/api/payments", paymentRoutes)
app.use("/api/analytics", analyticsRoutes)

app.use("/api/employees", employeeRoutes)
app.use("/api/hubs", hubRoutes)

app.use(
"/api/settlements",
settlementRoutes
)

app.use(
"/api/profit",
profitRoutes
)

app.use(
"/api/forecast",
forecastRoutes
)

app.use(
"/api/pricing",
pricingRoutes
)

app.use(
"/api/notifications",
notificationRoutes
)

module.exports = app