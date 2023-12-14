const Category = require('../models/category.model.js')

const test = (req, res) => {
    res.send('Hello World!')
  };

  const categories =async (req,res)=>{

    const data=req.body
    console.log(req.body)
    const newCategory= new Category(data)

    await newCategory.save()
    res.status(200).json(newCategory)
    
 
    
  };

  const categoryList = async(req,res)=>{
    const data = await Category.find({})
    res.json(data)
  }
  
  const categoryDelete =async(req,res)=>{
    const categoryId=req.params.id;
   try{
  await Category.findByIdAndDelete(categoryId)
  res.status(200).send("category deleted successfully")
   }catch(error){
    res.send(error.message)
  
   }
  }
  
  const categoryUpdate = async(req,res)=>{
    const categoryId=req.params.id;
    const data =req.body;
    try{
    const update= await category.findByIdAndUpdate(categoryId,data,{new:true})
    res.json(update);
  }catch(error){
    console.log('you are not authorised',error.message)
  }
    
  }
  
  
  module.exports={
    test,
    categories,
    categoryList, 
    categoryDelete,
    categoryUpdate
  }