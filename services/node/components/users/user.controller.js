const userService = require('./user.service')

exports.getAll = (req, res, next) => {
  userService
    .getAll()
    .then(user => res.json(user))
    .catch(err => next(err))
}
