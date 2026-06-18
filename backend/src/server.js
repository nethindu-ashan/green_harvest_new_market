require(
"dotenv"
).config()

const app=
require("./app")

const connectDB=
require("./config/db")

const start=
async()=>{

try{

await connectDB()

app.listen(

process.env.PORT,

()=>{

console.log(
`Server Running on ${process.env.PORT}`
)

}

)

}

catch(error){

console.log(
error
)

}

}

start()