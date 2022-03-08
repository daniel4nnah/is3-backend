const User = require('../models/user.js');
const { Schema, model } = require('mongoose');
const empreSchema = new Schema({
    be_on_kit: String,
    descripcion_emp: String,
    entrepreneurship_name: String,
    id_user: { type: Schema.Types.ObjectId, ref: User },
    //id_user: String,
    max_discount: String,
    min_discount: String,
    raw_materials: String,
    socialMedia: String,
})

module.exports = model('Emprendimiento', empreSchema);