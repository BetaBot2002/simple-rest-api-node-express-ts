import express from "express"
import { Router } from "express"
import { helloWorld } from "../Controllers/HomeController.js"

const homeRouter: Router = express.Router()

homeRouter.route("/").get(helloWorld)

export {
    homeRouter
}
