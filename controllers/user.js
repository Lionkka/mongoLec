const userService = require('../services/user')
const departmentService = require('../services/department')

module.exports.getAllUsers = (req, res, next) => {
  userService.findAll()
    .then(users => res.json({users}))
    .catch(next)
}

module.exports.createUser = (req, res, next) => {
  const user = req.body
  console.log(user)
  userService.insert(user)
    .then((update) => {
      console.log(update)
      res.status(204).end()
    })
}

module.exports.createDepartment = (req, res, next) => {
  const department = req.body
  departmentService.insert(department)
    .then((update) => {
      console.log(update)
      res.status(204).end()
    })
}

module.exports.updateUser = (req, res, next) => {
  const dataToUpdate = req.body
  userService.update()
}

