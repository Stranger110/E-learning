const express = require('express')
const categories = require('./Routes/category');
const app = express()
const student = require('./Routes/student')
const mongoose = require('mongoose')
const courses = require('./Routes/course')

mongoose.connect('mongodb://localhost:27017/learningDB').then(()=>{
    console.log('MongoDB Connected!');
}).catch((error)=>{
    console.log('Could not connect to MongoDB', error);
})


app.use(express.json())
app.use('/api/categories',categories)
app.use('/api/students',student)
app.use('/api/courses', courses)


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log('Port is running on '+ PORT))