const CategoryService = require('../services/category.service.js');

const consultarCategoria = async (req, res) => {
    console.log('gets here');
    res.json({
        categories: await CategoryService.getCategory()
    });
}

const saveCategoria = async (req, res) => {
    console.log('gets here');
    console.log(req.body);
    res.json({
        categories: await CategoryService.guardarCategory(req.body)

    })
}

const elimCate = async(req, res) => {
    res.json({
        categories: await CategoryService.eliminarCategory(req.params.id)
    })
}

const modCate = async(req, res) => {
    res.json({
        categories: await CategoryService.modificarCategory(req.body)
    })
}

module.exports = { consultarCategoria, saveCategoria, elimCate, modCate }