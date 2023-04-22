const express = require("express")
const {connectMongoDb} = require("./connection")
const userRoutes = require("./routes/users")
const { logReqRes } = require("./middlewares")

const app = express()
const port = 3000

// connection 
connectMongoDb(`mongodb://127.0.0.1:27017/testing_env `)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("mongo Error" , err))
 
// middlewares
app.use(express.urlencoded({ extended:false }))
app.use(logReqRes("_logs.txt"))

// routes
app.use("/", userRoutes)
 
app.listen(port, () => console.log(`server started at port: ${port}`))
