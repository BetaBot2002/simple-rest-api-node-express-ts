import { Request, Response } from "express";
import { IUsers, Users } from "../Models/Users.js";

const registerUser = async (req: Request, res: Response) => {
    const userData: IUsers = req.body
    const user = new Users(userData)
    const data = await user.save()
    res.status(200).json({
        message: "User Registered",
        user: data
    })
}

const login = async (req: Request, res: Response) => {
    const { email, password }: { email: string, password: string } = req.body
    console.log(email,password)
    const user=await Users.findOne({email})
    const message:string=user.password===password?"User Logged In":"User Not Logged In"
    res.status(200).json({
        message
    })
}

export {
    registerUser,
    login
}