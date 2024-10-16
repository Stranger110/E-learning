const express = require('express')
const {Category} = require('../models/categorySchema')
const router = express.Router()


router.get('/',async (req,res)=>{
    let categories = await Category.find()
    res.send(categories)
})


router.post('/',async (req,res)=>{

    // const {error} = validateData(req.res)
    // if(error) res.status(400).send(error.details[0].message)

    let category = new Category({
        name: req.body.name
    })

    await category.save()
    res.send(category)
})

router.get('/:id',async (req,res)=>{
    let category = await Category.findById(req.params.id)

    if(!category) return res.status(404).send("No Category Found!")

    res.send(category)
})

router.put('/:id', async (req,res)=>{
    // const {error} = validateData(req.body)
    // if(error) res.status(400).send(error.details[0].message)
    
    let category = await Category.findByIdAndUpdate(req.params.id , {name : req.body.name},{new: true})

    if(!category) return res.status(404).send("No Category Found!")

    res.send(category)
})

router.delete('/:id', async (req,res)=>{
    let category = await Category.findByIdAndDelete(req.params.id)
    if(!category) res.status(404).send('No Category Found')

    res.send(category)
});

// function validateData(category){
//     const schema = {
//         name : joi.string().min(3).required()
//     }
//     return joi.validate(category , schema)
// }

module.exports = router;