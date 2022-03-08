const { Schema, model } = require('mongoose');
const categorySchema = new Schema({
    icon_name: String,
    name_category: String,
})

module.exports = model('Category', categorySchema);