const { BadRequestError } = require('../errors/bad-request-error')
const UserService = require('../services/user.service')
const jwt = require('jsonwebtoken')
const { compare } = require('../utils/hashPassword')

exports.CreateUser = async (req, res) => {
  const payload  = req.body
  const userDoc = await UserService.FindUserExist(payload.email) 
  if(userDoc) {
    throw new BadRequestError(400, 'this email already in used')
  }
  const user = await UserService.CreateUser(payload)

  const userJwt = jwt.sign({
    id: user.id,
    email: user.email
  }, process.env.JWT_KEY)

  req.session = {
    jwt: userJwt
}
  return res.status(200).json(user)
}

exports.Signin = async (req, res) => {
  const { email, password } = req.body
  const existUser = await UserService.FindUserExist(email)
  if(!existUser) {
    throw new BadRequestError(400, 'Invalid Credentauls')
  }
  
  const passwordMatch = await compare(existUser.password, password)
  if(!passwordMatch){
    throw new BadRequestError(400, 'Invalid Credentauls')
  }

  const userJwt = jwt.sign({
    id: existUser.id,
    email: existUser.email
  }, process.env.JWT_KEY)

  req.session = {
    jwt: userJwt
}
  return res.status(200).json(existUser)
}

exports.Signout = async (req, res) => {
  req.session = null
    
  res.send({})
}