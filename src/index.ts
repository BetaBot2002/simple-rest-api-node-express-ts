import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import { Express, Request, Response } from "express"

dotenv.config()
const port = process.env.PORT

const app: Express = express()

app.use(cors())
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("Server is running")
})

app.get("/hello", (req: Request, res: Response) => {
    res.send("hello")
})

app.listen(port, () => {
    console.log("Server is running on " + port)
})