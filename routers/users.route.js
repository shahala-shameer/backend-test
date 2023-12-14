const express = require('express')
const router = express.Router();
const {test,signup,userList,userDelete,userUpdate} = require('../controllers/users.controller')


router.get('/test', (req, res) => {
    res.send('Hello World!')
  });

  router.get('/home', (req, res) => {
    res.send('Api is working')
  });
   router.post('/signup',signup)
  
  router.get('/userList',userList)

router.delete('/delete/:id',userDelete)

router.patch('/update/:id',userUpdate)



  
module.exports=router;