const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mssv: {
    type: String,
    required: true
  }
})
const User = mongoose.model('User', userSchema)
const users = [
  {
    username: 'Đặng Ngọc Tuấn',
    mssv: 16110239
  }
]
// insert
// User.collection.insert(users, (err, docs) => {
//   err ? console.error(err) : console.log('insert success')
// })

module.exports = User
