const jwt=require('jsonwebtoken')
const users =require('../Modal/userSchema')
const admins=require('../Modal/adminSchema')

exports.adminregister=async(req,res)=>{
    console.log("Inside Register function")
    const{username,password,email}=req.body
    // console.log(`Username:${username},Password:${password},Email:${email}`)
    try{
        const existingAdmin=await admins.findOne({email})
        const existingUser=await users.findOne({email})
        // console.log("already existing data:",existingUser)
        console.log("already existing data:",existingAdmin)
if(existingAdmin || existingUser){
    res.status(406).json("Existing user!!Please enter different email!! ")
    }
 else  
  {
    const newAdmin=new admins({username,password,email})
    await newAdmin.save()
    res.status(200).json(newAdmin)
    console.log(newAdmin);
  }
}
catch(err){
    res.status(401).json("Something went wrong,"+err)
}
}

