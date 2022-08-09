const mongoose = require('mongoose')
const { toHash, compare } = require('../utils/hashPassword') 
const UserSchema = mongoose.Schema({
  password: {
    type: String
  },
  email: {
    type: String
  }
}, {
  toJSON: {
    transform(doc, ret){
      ret.id = ret._id
      delete ret._id
      delete ret.password
      delete ret.__v
    }
  }
})

UserSchema.pre('save', async function (done) { 
  if(this.isModified('password')){
    const hashed = await toHash(this.get('password'))
    this.set('password', hashed)
  }

  done()
})

module.exports = mongoose.model('User', UserSchema)