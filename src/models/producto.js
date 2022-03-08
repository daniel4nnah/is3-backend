const Category = require('../models/category.js');
const Emprend = require('../models/emprendimiento.js');
// const Image = requiere('../controllers/uploadimage.controller.s');

const { Schema, model } = require('mongoose');
const productSchema = new Schema({
    //category_prod: String,
    // id_cat: [{ type: Schema.Types.ObjectId, ref: Category }],
    cat: String,
    descp: String,
    id_emprendimiento: { type: Schema.Types.ObjectId, ref: Emprend },
    image: String,
    is_favourite: String,
    name_prod: String,
    price: String,
    stock: String,
})

module.exports = model('Producto', productSchema);