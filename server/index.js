import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';


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

app.get('/',(req,res)=>res.json({
    message:'All is fine'
}))
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