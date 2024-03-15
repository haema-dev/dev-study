const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  id: String,
  name: String,
});
module.exports = mongoose.model('User', userSchema);