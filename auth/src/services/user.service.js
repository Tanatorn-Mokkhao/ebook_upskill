const UserModel = require('../models/user.model')


exports.CreateUser = async (payload) => {
  const user = new UserModel(payload)
  await user.save()

  return user
}

exports.FindUserExist = async (payload) => {
  const user = await UserModel.findOne({ email: payload })
  return user
}