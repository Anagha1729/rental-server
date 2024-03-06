//import mongoose
const mongoose=require('mongoose')

//connection string
const connectString= process.env.DATABASE

//CONNECTING
mongoose.connect(connectString).then(()=>{
    console.log("MongoDB server is Connected!!")
}).catch(rej=>{
    console.log("MongoDB connection Failed: ",rej);
})
