import mongoose from "mongoose"

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connect to mongoDB");
    } catch (error) {
        console.log("fail to connect mongoDB", error);
    }
}