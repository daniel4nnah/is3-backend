const ProductService = require('../services/producto.service.js');
const productmodel = require('../models/producto.js');


const consultarproducts = async (req, res) => {
    console.log('gets here1');
    res.json({
        productos: await ProductService.getProducts()
    });
}

const consultarMyProducts = async (req, res) => {
    console.log('gets here2');
    res.json({
        productos: await ProductService.getMyProducts(req.params.id)
    });
}

//Obtiene un producto
const consultarUnProducto = async (req, res) => {
    console.log('gets here3');
    res.json({
        productos: await ProductService.getOneProducto(req.params.id)
    });
}

const guardarProducto = async (req, res) => {
    console.log('sup');

    console.log('req');
    console.log(req.body);
    res.json({
        productos: await ProductService.guardarProducto(req.body)

    })
}

const elimProduct = async(req, res) => {
    res.json({
        productos: await ProductService.eliminarProducto(req.params.id)
    })
}

const modProduct = async(req, res) => {
    res.json({
        productos: await ProductService.modificarProducto(req.body)
    })
}

const consultarProductosPorCategoria = async(req, res) => {
    console.log('aaaaaa2');
    res.json({
        productos: await ProductService.consultarProductosPorCategoria(req.params.nombre)
    })
}

const verEmprendimiento = async(req, res) => {
    console.log('aaaaa3a');
    res.json({
        productos: await ProductService.verEmprenProd(req.params.id)
    })
}


module.exports = { consultarproducts, guardarProducto, elimProduct, modProduct, consultarProductosPorCategoria, verEmprendimiento, consultarMyProducts, consultarUnProducto }