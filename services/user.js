const User = require('../models/user');

const { ObjectId } = require('mongoose').Types;


module.exports.findAll = ()=>{
  return User.find()
}

module.exports.insert = (user)=>{
  return User.create(user)
}
