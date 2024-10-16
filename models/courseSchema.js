const mongoose = require('mongoose')
const {Categoryschema} = require('../models/categorySchema')
const courseschema = new mongoose.Schema({
    
    name: {
        type: String, 
        required: true, 
        maxlength: 20
    },
    tags: {
        type: Array, 
        required: true
    },
    category: {
        type: Categoryschema,
        required: true
    },
    creator: {
        type: String , 
        required: true
    },
    publishDate : {
        type: Date, 
        default: Date.now()
    },
    rating: {
        type: Number, 
        required: true
    }
})    

const Course = mongoose.model('courses',courseschema)

exports.courses = Course;