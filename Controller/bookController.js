const books=require("../Modal/bookSchema")

exports.addBooks=async(req,res)=>{
    console.log("Inside Books")
    const{title,author,genre,status,language,price}=req.body
    console.log(title,author,genre,status,language,price)
    const book_image=req.file.filename
    console.log(req.file.filename);
    try{
        const newBooks=new books({title,book_image,author,genre,status,language,price})
        await newBooks.save()
        res.status(200).json(newBooks)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.getAdminView=async(req,res)=>{
    console.log("Inside Get Book List");
    try{
        const result=await books.find()
        console.log(result);
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.getCatagoryNovel=async(req,res)=>{
    console.log("Inside Get Book List");
    try{
        const result=await books.find({genre:"Novels"})
        console.log(result);
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.getCatagoryAutobiography=async(req,res)=>{
    console.log("Inside Get Book List");
    try{
        const result=await books.find({genre:"AutoBiography"})
        console.log(result);
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.getCatagoryWorldClassics=async(req,res)=>{
    console.log("Inside Get Book List");
    try{
        const result=await books.find({genre:"World Classics"})
        console.log(result);
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.getCatagoryFiction=async(req,res)=>{
    console.log("Inside Get Book List");
    try{
        const result=await books.find({genre:"Fiction"})
        console.log(result);
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.deleteBookList=async(req,res)=>{
    const{id}=req.params
    try{
        console.log("inside delete")
        const result=await books.findByIdAndDelete({_id:id})
        console.log(result)
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }

    }

    exports.updateBookList=async(req,res)=>{
        const{title,book_image,author,genre,status,language,price}=req.body
        const{id}=req.params
        try{
            console.log("Inside Update")
            const result=await books.findByIdAndUpdate({_id:id},{title,book_image,author,genre,status,language,price})
            console.log(result)
            res.status(200).json(result)
        }
catch(err){
    res.status(401).json(err)
}
    }

   