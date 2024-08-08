import { Request, Response } from "express";
import { IUsers, Users } from "../Models/Users.js";

const registerUser = async (req: Request,res: Response)=>{
    const userData : IUsers=req.body
    const user = new Users(userData)
    await user.save()
    res.status(200).json({
        message:"User Registered"
    })
}

export{
    registerUser
}