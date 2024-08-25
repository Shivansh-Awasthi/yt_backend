import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async function () {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MongoDB is connected !! HOST: is ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("error: MongoDB Connection Failed", error)
        process.exit(1)
    }
}


export default connectDB;