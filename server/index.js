import express from 'express';
import mongoose from 'mongoose';

const app=express();
const PORT=4000;

async function start(){
    try {
        await mongoose.connect(
            `mongodb+srv://arazaraz777:braolgaas1907@cluster0.hgvmmeg.mongodb.net/mern-youtube?retryWrites=true&w=majority`
        )
        app.listen(PORT,()=>{
            console.log(`Server started at port: ${PORT} `)
        })
        
    } catch (error) {
        console.log(error)
    }
}