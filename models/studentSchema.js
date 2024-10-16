const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        minlength: 3, 
        maxlength: 30
    },
    isEnrolled: {
        type: Boolean, 
        default: false
    },
    number: {
        type: String, 
        required: true, 
        minlenth: 10, 
        maxlength: 25
    }
})

const Student = mongoose.model('Students', studentSchema)


exports.students = Student