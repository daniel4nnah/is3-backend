const { Router } = require('express');
const { consultarclientes, agregarUsuario, modificarUsuario, eliminarUsuario, login } = require('../controllers/user.controller')
const router = Router();


router.get('/api/users', consultarclientes);
router.post('/api/users/login', login);
router.post('/api/users/registro', agregarUsuario);
router.put('/api/users/modificar', modificarUsuario);
router.delete('/api/users/eliminar/:id', eliminarUsuario);

module.exports = router;