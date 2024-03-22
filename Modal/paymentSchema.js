const mongoose = require('mongoose')
const validators = require('validator')

const paymentSchema = new mongoose.Schema({
    Address: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    rentaldate: {
        type: String,
        required: true
    },
    duedate: {
        type: String,
        required: true
    },
    cardnumber: {
        type: String,
        required: true
    },
    cvv: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    reader:{
        type: String,
        required: true
    }


})
const payments = mongoose.model('payments', paymentSchema)
module.exports = payments