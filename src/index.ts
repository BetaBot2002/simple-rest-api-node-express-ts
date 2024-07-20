import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import { Express } from "express"
import { homeRouter } from "./Routes/HomeRoute.js"

dotenv.config()
const port = process.env.PORT || "3001"

const app: Express = express()

app.use(cors())
app.use(express.json())

app.use(homeRouter)

app.listen(port, () => {
    console.log("Server is running on " + port)
})
