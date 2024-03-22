// const jwt=require('jsonwebtoken')
const users = require('../Modal/userSchema')
const admins = require('../Modal/adminSchema')
const carts = require('../Modal/cartSchema')

exports.adminregister = async (req, res) => {
  console.log("Inside Register function")
  const { username, password, email } = req.body
  // console.log(`Username:${username},Password:${password},Email:${email}`)
  try {
    const existingAdmin = await admins.findOne({ email })
    const existingUser = await users.findOne({ email })
    console.log("already existing data:", existingUser)
    console.log("already existing data:", existingAdmin)
    if (existingAdmin || existingUser) {
      res.status(406).json("Existing user!!Please enter different email!! ")
    }
    else {
      const newAdmin = new admins({ username, password, email })
      await newAdmin.save()
      res.status(200).json(newAdmin)
      console.log(newAdmin);
    }
  }
  catch (err) {
    res.status(401).json("Something went wrong," + err)
  }
}

exports.addCarts = async (req, res) => {
  console.log("Inside Carts")
  const { userId, title, author, genre, status, language, book_image, price } = req.body
  console.log(userId, title, author, genre, status, language, book_image, price)
  try {

    const existingcart = await carts.findOne({ title })
    if (existingcart) {
      res.status(406).json("Exististing")
    }
    else {

      const newCarts = new carts({ userId, title, book_image, author, genre, status, language, price })
      await newCarts.save()
      res.status(200).json(newCarts)
    }
  }

  catch (err) {
    res.status(401).json(err)
  }
}



