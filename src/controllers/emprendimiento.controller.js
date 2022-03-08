const emprendimientoService = require('../services/emprendimiento.service.js');

const consultarentre = async (req, res) => {
    console.log('gets here');
    res.json({
        entres: await emprendimientoService.getEmprendimiento()
    });
}

const agregarEntre = async (req, res) => {
    console.log('req.body');
    console.log(req.body);
    res.json({
        entres: await emprendimientoService.guardarEntre(req.body)
    })

}

const removeEmpren = async(req, res) => {
    res.json({
        entres: await emprendimientoService.eliminarEntre(req.params.id)
    })
}

const modificarEmpre = async(req, res) => {
    res.json({
        entres: await emprendimientoService.modificarEntre(req.body)
    })
}

const verEmprendimientos = async(req, res) => {
    res.json({
        entres: await emprendimientoService.verEmpre(req.params.id)
    })
}
//Get emprendimiento por id
const getEmprendimientoById = async(req, res) => {
    res.json({
        entres: await emprendimientoService.getEmpreById(req.params.id)
    })
}


module.exports = {consultarentre, agregarEntre, removeEmpren, modificarEmpre, verEmprendimientos, getEmprendimientoById}