const User = require('../models/user.js');
const Emprendimiento = require('../models/emprendimiento.js');

const { Schema, model } = require('mongoose');
const orderSchema = new Schema({
    address: String,
    id_user: { type: Schema.Types.ObjectId, ref: User },
    id_emp: { type: Schema.Types.ObjectId, ref: Emprendimiento},
    mail: String,
    order_date: String,
    status: String,
    tax: String,
    total_price: String,
})

module.exports = model('Order', orderSchema);