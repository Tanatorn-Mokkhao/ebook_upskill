const express = require('express')

const app = express()


app.use('/api/products/test', (req,res) => {
  res.send('hello product')
})

module.exports = { app }