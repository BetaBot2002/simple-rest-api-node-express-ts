import express from "express"
import { Router } from "express"
import { home } from "../Controllers/HomeController.js"

const homeRouter: Router = express.Router()

homeRouter.route("/").get(home)

export {
    homeRouter
}
