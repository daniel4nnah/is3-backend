const { Router } = require('express');
const { consultarentre, agregarEntre, removeEmpren, modificarEmpre, verEmprendimientos,getEmprendimientoById } = require('../controllers/emprendimiento.controller')
const router = Router();

router.get('/api/emprendimientos', consultarentre);
router.get('/api/emprendimientos/:id', getEmprendimientoById);
router.post('/api/emprendimientos/registro', agregarEntre);
router.delete('/api/emprendimientos/eliminar/:id', removeEmpren);
router.put('/api/emprendimientos/modificar', modificarEmpre);
router.get('/api/emprendimientos/user/:id', verEmprendimientos);

module.exports = router;