import mongoose from "mongoose"

export async function connectDB(){
    try{
        await mongoose.connect(process.env.CONNECTION_URL!)
        console.log("MongoDB connected");
        
    }
    catch(err){
        console.log("MongoDB connection failed",err);
        
    }
}