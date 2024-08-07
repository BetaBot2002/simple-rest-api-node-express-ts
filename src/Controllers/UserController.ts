import { Request, Response } from "express";
import { Users } from "../Models/Users.js";
import { IUsers } from "../Interfaces/IUsers.js";

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