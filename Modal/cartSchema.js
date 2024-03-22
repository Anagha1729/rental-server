const mongoose = require('mongoose')
const validators = require('validator')
const cartSchema = new mongoose.Schema({

    userId:{
        type: String,
        required: true
        // unique: true

    },
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
    status: {
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
 const carts = mongoose.model('carts', cartSchema)
 
 module.exports = carts

