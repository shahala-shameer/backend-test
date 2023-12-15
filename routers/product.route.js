const express = require('express')
const router = express.Router();
const{test,addProduct,updateProduct,deleteProduct} = require('../controllers/product.controller.js')




router.get('/test', test)

router.post('/addproduct',addProduct)

router.patch('/updateproduct/:id',updateProduct)

router.delete('/delete/:id',deleteProduct)



  module.exports=router;