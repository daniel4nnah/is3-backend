const Order = require('./order.js');
const Product = require('./producto.js');

const { Schema, model } = require('mongoose');
const detailOrderSchema = new Schema({
    id_order: { type: Schema.Types.ObjectId, ref: Order },
    id_product: { type: Schema.Types.ObjectId, ref: Product },
    amount: String,
    final_price: String,
})

module.exports = model('detailOrder', detailOrderSchema);