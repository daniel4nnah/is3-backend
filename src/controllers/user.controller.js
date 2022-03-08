const userService = require('../services/user.service.js');


const login = async (req, res) => {
    console.log('gets here');
    res.json({
        users: await userService.loginUser(req.body)
    });
}

const consultarclientes = async (req, res) => {
    console.log('gets here');
    res.json({
        users: await userService.getUsers()
    });
}

const agregarUsuario = async (req, res) => {
    console.log(req.body);
    res.json({
        users: await userService.guardarUser(req.body)

    })

}

const eliminarUsuario = async(req, res) => {
    res.json({
        users: await userService.eliminarUser(req.params.id)
    })
}

const modificarUsuario = async(req, res) => {
    res.json({
        users: await userService.modificarUser(req.body)
    })
}

module.exports = { consultarclientes, agregarUsuario, eliminarUsuario, modificarUsuario, login}