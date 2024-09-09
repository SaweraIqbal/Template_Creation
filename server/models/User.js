const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', async function (next) {
  // Mock hash function
  next();
});

userSchema.methods.comparePassword = async function (password) {
  // Mock password comparison
  return this.password === password;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
