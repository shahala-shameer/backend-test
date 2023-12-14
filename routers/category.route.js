const express = require('express');
const router = express.Router();
const { test,categories, categoryList, categoryDelete, categoryUpdate } = require('../controllers/category.controller');


router.get('/test', (req, res) => {
    res.send('Hello World!')
  });;

  router.post('/categories',categories)
  
  router.get('/categoryList',categoryList)

router.delete('/delete/:id',categoryDelete)

router.patch('/update/:id',categoryUpdate)



  
module.exports=router; 