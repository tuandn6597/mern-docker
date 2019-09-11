const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    mssv: String,
})

module.exports = mongoose.model("User", userSchema);
