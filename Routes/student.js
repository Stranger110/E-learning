const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const {Student} = require('../models/studentSchema')


router.get('/',async (req,res)=>{
    let students = await Student.find()
    res.send(students)
})


router.post('/',async (req,res)=>{

    // const {error} = validateData(req.res)
    // if(error) res.status(400).send(error.details[0].message)

    let student = new Student({
        name: req.body.name,
        isEnrolled: req.body.isEnrolled,
        number: req.body.number,
    })

    await student.save()
    res.send(student)
})

router.get('/:id',async (req,res)=>{
    let student = await Student.findById(req.params.id)

    if(!student) return res.status(404).send("No Student Found!")

    res.send(student)
})

router.put('/:id', async (req,res)=>{
    // const {error} = validateData(req.body)
    // if(error) res.status(400).send(error.details[0].message)
    
    let student = await Student.findByIdAndUpdate(req.params.id , 
        {name : req.body.name , 
            isEnrolled: req.body.isEnrolled, 
            number: req.body.number},
        {new: true})

    if(!student) return res.status(404).send("No Student Found!")

    res.send(student)
})

router.delete('/:id', async (req,res)=>{
    let student = await Student.findByIdAndDelete(req.params.id)
    if(!student) res.status(404).send('Not Found')

    res.send(student)
});

// function validateData(category){
//     const schema = {
//         name : joi.string().min(3).required()
//     }
//     return joi.validate(category , schema)
// }

module.exports = router;