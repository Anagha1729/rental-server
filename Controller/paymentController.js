const jwt=require('jsonwebtoken')
const payments=require('../Modal/paymentSchema')

exports.addpayments=async(req,res)=>{
    console.log("payments")
    const{Address,contact,rentaldate,duedate,cardnumber,cvv,otp,title,reader}=req.body
    console.log(Address,contact,rentaldate,duedate,cardnumber,cvv,otp,title,reader)
   
    try{
        const newPayments=new payments({Address,contact,rentaldate,duedate,cardnumber,cvv,otp,title,reader})
        await newPayments.save()
        res.status(200).json(newPayments)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.getPaymentView=async(req,res)=>{
    console.log("paymentview");
    try{
        const result=await payments.find()
        console.log(result);
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}
