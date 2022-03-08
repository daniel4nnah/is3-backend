const { Router } = require('express');
const { consultarDonacion, saveDonation, elimDona, modDona } = require('../controllers/donation.controller')
const router = Router();


router.get('/api/donation', consultarDonacion);
router.post('/api/donation/registro', saveDonation);
router.put('/api/donation/modificar', modDona);
router.delete('/api/donation/eliminar/:id', elimDona);

module.exports = router;