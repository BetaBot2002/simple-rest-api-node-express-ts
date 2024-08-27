import express from "express"
import { Router } from "express"
import { login, registerUser } from "../Controllers/UserController.js"

const userRouter : Router = express.Router()

userRouter.route("/register").post(registerUser)
userRouter.route("/login").post(login)

export{
    userRouter
}