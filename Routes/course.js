const express = require('express')
const router = express.Router()
const {Course} = require('../models/courseSchema')
const {Category} = require('../models/categorySchema')

router.get('/',async(req,res)=>{
    let courses = await Course.find()
    res.send(courses)
})

router.post('/',async(req,res)=>{

    const category = await Category.findById(req.body.categoryid)
    if(!category) return res.status(400).send("invalid ID")

    let course = new Course({
        name: req.body.name,
        tags: req.body.tags,
        category: {
            _id : category._id,
            name: category.name
        },
        creator: req.body.creator,
        rating: req.body.rating,
    })

    await course.save()
    res.send(course)
})


router.get('/:id',async (req,res)=>{
    let course = await Course.findById(req.params.id)

    if(!course) return res.status(404).send("No Course Found!")

    res.send(course)
})

router.put('/:id', async (req,res)=>{
    // const {error} = validateData(req.body)
    // if(error) res.status(400).send(error.details[0].message)
    
    let course = await Course.findByIdAndUpdate(req.params.id , 
        {name : req.body.name , 
            tags: req.body.tags, 
            category: {
                _id : category._id,
                name: category.name
            }, 
            creator: req.body.creator, 
            rating: req.body.rating
        },{new: true})

    if(!course) return res.status(404).send("No Course Found!")

    res.send(course)
})

router.delete('/:id', async (req,res)=>{
    let course = await Course.findByIdAndDelete(req.params.id)
    if(!course) res.status(404).send('Not Found')

    res.send(course)
});

module.exports = router;