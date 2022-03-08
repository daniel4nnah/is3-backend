const express = require("express");
const multer = require('multer');
const {consultarImagenes} = require('../services/uploadimage.service')

const upload = multer();
const router = express.Router();


const uploadController = require("../services/uploadimage.service");

//router.post("/api/tea", upload.none(), uploadController.newTea);
router.post('/api/photo', uploadController.uploadImg , uploadController.newTea);
router.get('/api/image', uploadController.getOneTea);
router.get('/api/getAll', consultarImagenes);

module.exports = router;

