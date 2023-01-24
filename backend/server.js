 const dotenv = require('dotenv').config()
const express = require('express')
const mongoose =require('mongoose');
const Task = require('./model/taskModel');
 const taskRoutes = require('./routes/taskRoute')
// const connectDB= require('./config/connectDB')
mongoose.set('strictQuery', false);
const app = express()
//  connectDB()
// Routes
app.get('/',(req,res)=>{
    res.send("Home Page")
})
// middlewares
 app.use(express.json())
 app.use(express.urlencoded({extended:false}))
 app.use('/api/tasks',taskRoutes)
const PORT = process.env.PORT || 5000

 mongoose
     .connect(process.env.MONGO_URL)
     .then(()=>{
        app.listen(PORT, ()=>{
            console.log(`${PORT} is online`)
        })
     })
     .catch((err)=> console.log(err))

