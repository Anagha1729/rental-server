const jwt=require('jsonwebtoken')
const users=require('../Modal/userSchema')
const admins =require('../Modal/adminSchema')
const carts=require('../Modal/cartSchema')


exports.register=async(req,res)=>{
    console.log("Inside Register function")
    const{username,password,email}=req.body
    console.log(`Username:${username},Password:${password},Email:${email}`)
    try{
        const existingUser=await users.findOne({email})
        console.log(existingUser)
if(existingUser){
    res.status(401).json("Existing user!!Please try again!! ")
    }
 else  
  {
    const newUser=new users({username,password,email})
    await newUser.save()
    res.status(200).json(newUser)
  }
}
catch(err){
    res.status(401).json("Something went wrong,"+err)
}
}

exports.login=async(req,res)=>{
    console.log("Inside login function!");
    const{email,password}=req.body
    try{
        const existingUser =await users.findOne({email,password})
        const existingAdmin=await admins.findOne({email,password})
        if(existingUser ){
            const token=jwt.sign({userId:existingUser._id},"superSecretKey")
            res.status(200).json({
                existingUser,
                role:'user',
                token
            })
            console.log(existingUser);
        }
        
        else{
            if(existingAdmin){
                const token=jwt.sign({userId:existingAdmin._id},"superSecretKey")
                console.log(token);
                res.status(200).json({
                    existingAdmin,
                    role:"admin",
                    token
                })
            }
            else{
                res.status(406).json("No User Found! Invalid Email/Password")
            }
        }
    }
    catch(err){
        res.status(500).json("Somthing went Wrong" + err)
    }
}
exports.getCartView=async(req,res)=>{
    console.log("Inside Cart List");
    try{
        const result=await carts.find()
        console.log(result);
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
  }

  exports.deleteCartList=async(req,res)=>{
    const{id}=req.params
    try{
        console.log("inside cart delete")
        const result=await carts.findByIdAndDelete({_id:id})
        console.log(result)
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }

    }
  