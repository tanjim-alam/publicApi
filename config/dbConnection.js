import mongoose from "mongoose";
import { config } from "dotenv";
config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connection Successfully")
    } catch (error) {
        console.log("DB Connection failed", error);
    }
};

export default dbConnection;