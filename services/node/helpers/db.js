const config = require('./config')
const mongoose = require('mongoose')
mongoose.connect(
  process.env.MONGODB_URI || config.mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
mongoose.Promise = global.Promise

module.exports = {
  User: require('../components/users/user.model')
}
