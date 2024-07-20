import express from "express"
import { helloWorld } from "../Controllers/HomeController.js"

const homeRouter=express.Router()

homeRouter.route("/").get(helloWorld)

export{
    homeRouter
}
