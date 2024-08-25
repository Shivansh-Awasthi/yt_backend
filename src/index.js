// import express from 'express'
// const app = express();
import { app } from './app.js';
import dotenv from 'dotenv'
import connectDB from './db/index.js';

dotenv.config()



const port = process.env.PORT;



// MONGO DB connection:

connectDB()
    .then(app.listen(port || 8080, () => {
        console.log(`Server is running on port: ${port}`)
        app.on("err", (err) => {
            console.log(`database error: `, err);
            throw err;
        })
    }))
    .catch((error) => {
        console.log(error)
    })




app.get('/', (req, res) => {
    res.send("hello pp")
})


