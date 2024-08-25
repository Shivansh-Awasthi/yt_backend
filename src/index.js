import express from 'express'
const app = express();
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';

dotenv.config()



const port = process.env.PORT;




; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("connected")
    } catch (error) {
        console.error(error);
        throw error

    }
})()




app.get('/', (req, res) => {
    res.send("hello pp")
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})