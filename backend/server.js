 const dotenv = require('dotenv').config()
const express = require('express')
 const mongoose =require('mongoose')
 
// const connectDB= require('./config/connectDB')
mongoose.set('strictQuery', false);
const app = express()
//  connectDB()
// Routes
app.get('/',(req,res)=>{
    res.send("Home Page")
})
const PORT = process.env.PORT || 5000

 mongoose
     .connect(process.env.MONGO_URL)
     .then(()=>{
        app.listen(PORT, ()=>{
            console.log(`${PORT} is online`)
        })
     })
     .catch((err)=> console.log(err))
