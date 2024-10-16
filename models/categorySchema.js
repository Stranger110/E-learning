const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 30}
})

const Category = mongoose.model('Category', categorySchema)

exports.category = Category;

exports.categoryschema = categorySchema;