const { Router } = require('express');
const {consultarproducts, guardarProducto, elimProduct, modProduct, consultarProductosPorCategoria, verEmprendimiento, consultarMyProducts, consultarUnProducto  } = require('../controllers/producto.controller')
const router = Router();


router.get('/api/productos', consultarproducts);
router.get('/api/productos/:id', consultarMyProducts);
router.get('/api/productos/categoria/:nombre', consultarProductosPorCategoria);
router.get('/api/productos/producto/:id', consultarUnProducto);
router.post('/api/productos/registro', guardarProducto);
router.put('/api/productos/modificar', modProduct);
router.delete('/api/productos/eliminar/:id', elimProduct);
router.get('/api/productos/verEmprendimiento/:id', verEmprendimiento);

module.exports = router;