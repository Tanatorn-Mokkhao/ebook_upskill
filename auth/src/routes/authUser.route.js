const express = require('express')
const { CreateUser, Signin, Signout } = require('../controllers/user.controller')
const router = express.Router()


router.post('/signup', CreateUser)
router.post('/signin', Signin)
router.post('/signout', Signout)

module.exports = router