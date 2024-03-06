const mongoose = require('mongoose')
const validators = require('validator')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
        // unique: true
    },
    book_image: {
        type: String,
        required: true

    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true

    },
    language: {
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    }
})
 const books = mongoose.model('books', bookSchema)
 
 module.exports = books






