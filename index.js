import express from 'express'
import mongoose from 'mongoose'     
import studentRouter from "./routes/studentRouter.js";
import userRouter from './routes/userRouter.js';
import authenticateUser from './middlewares/authenticate.js';
import productRouter from './routes/productRouter.js';


const mongoUri = "mongodb+srv://admin:1234@cluster0.qk6aya7.mongodb.net/?appName=Cluster0"

mongoose.connect(mongoUri).then(
    ()=> {
    console.log("connected to MongoDB");
    }

).catch(
    (err)=> {
        console.log("Error connecting to MongoDB", err);
    }   
)

const app = express()

app.use(express.json())

app.use(authenticateUser)
    

app.use("/students", studentRouter)
app.use("/users", userRouter)
app.use("/products", productRouter)


app.listen(3000,
    ()=> {
        console.log("Server is running");
    }
)