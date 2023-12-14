const express = require('express')
const mongoose = require('mongoose');
const userRouter = require('./routers/users.route')
const categoryRouter = require('./routers/category.route.js');
require('dotenv').config()
const app = express()
const port = 3000
app.use(express.json())
app.use("/api/users" ,userRouter)
app.use('/api/category',categoryRouter)


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  main().then(data=>console.log("db connected"))
  .catch(err => console.log(err));

  async function main() {
    await mongoose.connect(process.env.MONGO_DB);
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }  