import express from 'express'
const app = express();
import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config()
const port = process.env.PORT




    (async () => {

    })()




app.get('/', (req, res) => {
    res.send("hello pp")
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})