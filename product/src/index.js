const express = require('express')
const app = express()


app.use('/api/products', (req,res) => {
  res.send('Hello world')
})





app.listen(3000, () => {
  console.log('server product is running on port 3000')
})