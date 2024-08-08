import mongoose from "mongoose"
const connectDB=async ()=>{
    await mongoose.connect(process.env.MONGO_DB_URL)
    console.log("MongoDB connected")
}

export{
    connectDB
}