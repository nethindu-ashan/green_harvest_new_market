require("dotenv").config()

const http = require("http")
const app = require("./app")
const connectDB = require("./config/db")

const { Server } = require("socket.io")

const server = http.createServer(app)

const io = new Server(server, {
cors: {
origin: "*"
}
})

// 🔥 make io global accessible
global.io = io

io.on("connection", (socket) => {

console.log("User connected:", socket.id)

// join room (optional user-based tracking)
socket.on("join", (userId) => {
socket.join(userId)
})

socket.on("disconnect", () => {
console.log("User disconnected:", socket.id)
})

})

const start = async () => {

try {

await connectDB()

server.listen(process.env.PORT, () => {
console.log(`Server Running on ${process.env.PORT}`)
})

} catch (error) {
console.log(error)
}

}

start()