const product = require('../models/product.model')

const test = async (req, res) => {

    try{
        const data = await product.find({})
        res.status(200).send.json(data);
    }catch(error){
        res.status(404)

    }
    
  };

const addProduct = async(req,res)=>{
    const data = req.body;
    const newProduct = new product(data);
    try{
        await newProduct.save();
        res.status(200).json( newProduct);
        console.log(error)

    }catch(error){
        res.status(404).json()
    }
}

const updateProduct = async(req,res)=>{
    const productId = req.params.body
    const data =req.body;
    try{
        const updateProduct = await product.findByIdAndUpdate(productId,data,{new:true})
        res.status(200).json(updateProduct)
    }catch(error){
        res.status(500).send("product not found")
    }
}

const deleteProduct =async(req,res)=>{
    const userId=req.params.id;
   try{
  await User.findByIdAndDelete(userId)
  res.status(200).send("user deleted successfully")
   }catch(error){
    res.status(500).send(error.message)
  
   }
  }
  






module.exports={
    test,
    addProduct,
    updateProduct,
    deleteProduct
}
