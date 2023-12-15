
const User = require('../models/users.model.js')

const test = (req, res) => {
    res.send('Hello World!')
  }; 

  const signup =async (req,res)=>{

    const {username,email,password}= req.body;
    const newUser = new User ({username,email,password})
    try{
    await newUser.save()
    res.json(newUser)
    }catch (error){
    console.log(error)
    res.status(500).json({error:'Internal Server Error'})
    }
  };

const userList = async(req,res)=>{
  try {
    const data = await User.find({});
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const userDelete =async(req,res)=>{
  const userId=req.params.id;
 try{
await User.findByIdAndDelete(userId)
res.status(200).send("user deleted successfully")
 }catch(error){
  res.status(500).send(error.message)

 }
}

const userUpdate = async(req,res)=>{
  const userId=req.params.id;
  const data =req.body;
  try{
  const update= await User.findByIdAndUpdate(userId,data,{new:true})
  res.json(update);
}catch(error){
  console.log('you are not authorised',error.message)
}
  
}


  module.exports={
    test,
    signup,
    userList,
    userDelete,
    userUpdate
  }