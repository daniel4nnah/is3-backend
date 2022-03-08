const { Router } = require('express');
const { consultarCategoria, saveCategoria, elimCate, modCate } = require('../controllers/category.controller')
const router = Router();


router.get('/api/category', consultarCategoria);
router.post('/api/category/registro', saveCategoria);
router.put('/api/category/modificar', modCate);
router.delete('/api/category/eliminar/:id', elimCate);

module.exports = router;