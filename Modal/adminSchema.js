const mongoose = require('mongoose')
const validators = require('validator')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {

        type: String,
        required: true,
        unique: true,
        validate: [validators.isEmail, 'Invalid Email']
    }
})
//const users = mongoose.model('users', userSchema)
 const admins = mongoose.model('admins', userSchema)
//module.exports = users
 module.exports = admins