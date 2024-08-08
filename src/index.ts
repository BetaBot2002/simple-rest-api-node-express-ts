import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import { Express } from "express"
import { homeRouter } from "./Routes/HomeRoute.js"
import { connectDB } from "./Database/dbConnection.js"
import { userRouter } from "./Routes/UserRoute.js"

dotenv.config()
const port = process.env.PORT || "3001"

const app: Express = express()
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/",homeRouter)
app.use("/user",userRouter)

app.listen(port, () => {
    console.log("Server is running on " + port)
})
