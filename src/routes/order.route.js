const { Router } = require('express');
const { consultarOrden, saveOrder, elimOrder, modOrder, verUsuario, saveDetailOrder, consultarOrdenesUsuario, consultarProductosOrden, consultarOrdenesEmprendimiento} = require('../controllers/order.controller')
const router = Router();

router.get('/api/orden', consultarOrden);
router.get('/api/orden/usuario/:id', consultarOrdenesUsuario);
router.get('/api/orden/emprendimiento/:id', consultarOrdenesEmprendimiento);
router.get('/api/orden/productos/:id', consultarProductosOrden);
router.post('/api/orden/registro', saveOrder);
router.post('/api/orden/saveDetailOrder', saveDetailOrder);
router.delete('/api/orden/eliminar/:id', elimOrder);
router.put('/api/orden/modificar', modOrder);
router.get('/api/orden/verusuario/:id', verUsuario);

module.exports = router;