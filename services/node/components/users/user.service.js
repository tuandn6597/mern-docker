const { User } = require('../../helpers/db')

exports.getAll = () => User.find().lean()
