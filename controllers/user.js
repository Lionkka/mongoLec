const userService = require('../services/user')

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

module.exports.updateUserInfo = (req, res, next) => {
  const {
    name, surname, password, email,
  } = req.body

  userService.findByEmail(req.user.email)
    .then((user) => {
      const {id} = user
      const dataToUpdate = {
        id,
        name,
        surname,
        email: email.toLowerCase(),
      }
      if (password) {
        dataToUpdate.password = crypto.createHash('md5').update(password).digest('hex')
      }
      return userService.saveOrUpdate(dataToUpdate)
        .then(() => Object.assign({}, dataToUpdate, user.toObject()))
    })
    .then((user) => {
      const token = jwt.sign(
        {email, role: user.role.slug, id: user.id},
        serverConfig.tokenSecret,
      )
      res.send({token})
    })
    .catch(next)
}

