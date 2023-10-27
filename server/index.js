import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoute from './routes/auth.js'

const app=express();
dotenv.config()

//constatns
const PORT=process.env.PORT;
const DB_NAME=process.env.DB_NAME;
const DB_PASSWORD=process.env.DB_PASSWORD;
const DB_USER=process.env.DB_USER

//Middleware
app.use(cors())
app.use(express.json())
//http://localhost:3002
//Routes
app.use('/api/auth',authRoute)

async function start(){
    try {
        await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.hgvmmeg.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
        )
        app.listen(PORT,()=>{
            console.log(`Server started at port: ${PORT} `)
        })
        
    } catch (error) {
        console.log(error)
    }
}
start()