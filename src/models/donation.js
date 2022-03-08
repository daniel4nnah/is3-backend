const { Schema, model } = require('mongoose');
const donationSchema = new Schema({
    address: String,
    description: String,
    mail: String,
    id_emprendimiento: String,
})

module.exports = model('Donation', donationSchema);