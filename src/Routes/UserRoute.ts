import express from "express"
import { Router } from "express"
import { registerUser } from "../Controllers/UserController.js"

const userRouter : Router = express.Router()

userRouter.route("/register").post(registerUser)

export{
    userRouter
}