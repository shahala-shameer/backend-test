const mongoose = require('mongoose');

const  productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    
        image:{
            type:Array,
            required:true,
            
        },
        price:{
            type:Number,
            required:true,
        },
         discountPrice:{
            type:Number,

         },
         offer:{
            type:Boolean,
         },
         categoryRef:{
            type:String,
            required:true
         }

    
},{timestamps:true})

const product= mongoose.model("product",productSchema)
module.exports=product