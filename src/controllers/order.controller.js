const OrderService = require('../services/order.service.js');

const consultarOrden = async (req, res) => {
    console.log('gets here');
    res.json({
        ordenes: await OrderService.getOrder()
    });
}

//Obtienes las ordenes de un emprendimiento
const consultarOrdenesUsuario = async (req, res) => {
    res.json({
        ordenes: await OrderService.getOrdenesUsuario(req.params.id)
    });
}

//Obtienes las ordenes de un emprendimiento
const consultarOrdenesEmprendimiento = async (req, res) => {
    res.json({
        ordenes: await OrderService.getOrdenesEmprendimiento(req.params.id)
    });
}
// Obtiene los productos de una orden
const consultarProductosOrden = async (req, res) => {
    res.json({
        ordenes: await OrderService.getProductosOrden(req.params.id)
    });
}


const saveOrder = async (req, res) => {
    console.log(req.body);
    res.json({
        ordenes: await OrderService.guardarOrder(req.body)

    })
}

const saveDetailOrder = async (req, res) => {
    console.log(req.body);
    res.json({
        detalle: await OrderService.guardarDetalleOrden(req.body)

    })
}


const elimOrder = async(req, res) => {
    res.json({
        ordenes: await OrderService.eliminarOrder(req.params.id)
    })
}

const modOrder = async(req, res) => {
    res.json({
        ordenes: await OrderService.modificarOrder(req.body)
    })
}

const verUsuario = async(req, res) => {
    console.log('aaaaaa');
    res.json({
        ordenes: await OrderService.verUsuPed(req.params.id)
    })
}


module.exports = { consultarOrden, saveOrder, elimOrder, modOrder, verUsuario, saveDetailOrder, consultarOrdenesUsuario,consultarProductosOrden, consultarOrdenesEmprendimiento }