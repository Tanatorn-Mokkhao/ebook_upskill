const express = require('express')
require('express-async-errors');
require('dotenv').config()
const { errorHandler } = require('./middlewares/error-handler')
const cookieSession = require('cookie-session')
const UserRoute = require('./routes/authUser.route')
const app = express()


app.use(express.json())
app.set('trust proxy', true)
app.use(
  cookieSession({
      signed: false,
      // secure: process.env.NODE_ENV !== 'test' // if we are running mpn run test it will defined with test then return false
      secure: false
  })
)
app.use('/api/auths/user', UserRoute )

app.use(errorHandler)

module.exports = { app }