
//to .env variables while server is running-importing dotenv
require('dotenv').config()

//importing express.js
const express=require('express')

//import cors
const cors=require('cors')

//create express server
const lbServer=express()

//implementing cors to server
lbServer.use(cors())

//parsing json data using server app
lbServer.use(express.json())

//import router
const router=require('./Routes/routes')

//import mongoconnection
require('./Connection/connection')

//import middleware
const middleware=require('./Middleware/userMiddleware')
lbServer.use(middleware)

//use router to server
lbServer.use(router)

//port number configuaration
const PORT=4000 ||process.env.PORT

//serving upload files
lbServer.use('/upload',express.static('./Uploads'))

//to run server
lbServer.listen(PORT,()=>{
    console.log(`server is started at ${PORT}` )
})

//resolve request to localhost:4000
lbServer.get('/',(req,res)=>{
    res.send("<h1>Server is Successfully Running!!</h1>")
})

lbServer.post('/',(req,res)=>{
    res.send("<h1> Post  Request is Successfully!!</h1>")
})