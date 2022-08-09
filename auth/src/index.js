const { app } = require('./app.js')
const mongoose = require('mongoose')

const start = async () => {
    try{
      await mongoose.connect('mongodb://auth-mongo-srv:27017/auth')
    }catch (err){
      console.log(err)
    }


  app.listen(3000, () => {
    console.log('server auth is running on port 3000')
  })
}

start()
