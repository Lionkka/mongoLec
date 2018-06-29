const Department = require('../models/department');

const { ObjectId } = require('mongoose').Types;


module.exports.findAll = ()=>{
  return Department.find()
}

module.exports.insert = (user)=>{
  return Department.create(user)
}
