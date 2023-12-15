const mongoose = require('mongoose');


const  categorySchema = new mongoose.Schema({
    name:{
        type:String, 
        sparse:true
        
    },
    description:{
        type:String,
    },

},{timestamps:true})

const Category= mongoose.model('category',categorySchema)
module.exports=Category

    