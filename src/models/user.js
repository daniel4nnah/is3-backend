const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    fullName: String,
    birthDate: String,
    gender: String,
    address: String,
    password: String,
    phone: String,
    role: String,
    mail: String,
})

module.exports = model('User', userSchema);