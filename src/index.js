import express from 'express'
const app = express();
import dotenv from 'dotenv'
import connectDB from './db/index.js';

dotenv.config()



const port = process.env.PORT;



// MONGO DB connection:

connectDB();



// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         console.log("connected")
//         app.on("error", (err) => {
//             console.log(err, "err occured");
//             throw err
//         })


//     } catch (error) {
//         console.error(error);
//         throw error

//     }
// })()




app.get('/', (req, res) => {
    res.send("hello pp")
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})