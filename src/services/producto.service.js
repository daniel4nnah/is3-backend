const productmodel = require('../models/producto.js');
const catmodel = require('../models/category.js');
const empremodel = require('../models/emprendimiento.js');
const multer = require('multer');
const path= require('path') //new

var ObjectId = require('mongoose').Types.ObjectId; 
class ProductService {
    ProductService() { }

    async getProducts() {
        try {
            
            var list_products = await productmodel.find();
            console.log(list_products);
            var length_list = list_products.length;
            console.log('aaaaaa');
            console.log(length_list);
            length_list = length_list-1;

            console.log(list_products[length_list]);

            console.log(list_products[length_list]._id)
            return list_products;
            
            // const propertyNames = Object.values(await productmodel.find());
            // console.log(variable.productos[0]);
            // console.log("Hola");
            // console.log(entries[0]);
            // var length = entries.length;
            // console.log(length);
            // console.log(entries.length[0]._id);
            
        } catch (error) {
            console.log(error);
            return error;

        }
    }

    async getMyProducts(idc) {
        console.log(idc);
        try {
            return await productmodel.find({
                id_emprendimiento: ObjectId(idc)
            });
        } catch (error) {
            console.log(error);
            return error;

        }
    }
    //Obtiene un producto
    async getOneProducto(idp) {
        console.log(idp);
        try {
            return await productmodel.findOne({
                _id: ObjectId(idp)
            });
        } catch (error) {
            console.log(error);
            return error;

        }
    }

    async guardarProducto(producto = new productmodel()) {
        try {
            console.log("I'm here");
            var productGuardado;
            await productmodel.create(producto).then( (value) => {
                productGuardado =  value;
            });

            return productGuardado;

        } catch (error) {
            console.log(error);

        }
    }

    async eliminarProducto(idc) {
        console.log(idc);
        var productoEliminado;
        try {
            await productmodel.findOneAndRemove({
                _id: idc
            }).then( (value) => {
                console.log(value);
                productoEliminado = value;
            });

            return productoEliminado;
        } catch (error) {
            console.log(error);

        }
    }

    async modificarProducto(promod) {

        var productoModificado;
        try {
            await productmodel.findOneAndUpdate({
                _id: promod._id
            }, promod).then( (value) => {

                productoModificado = promod;
            });

            return productoModificado;
        } catch (error) {
            console.log(error);

        }
    }

    // Ver categoría de producto (Usar ID categoría)
    async consultarProductosPorCategoria(nombreCategoria) {
        console.log(nombreCategoria);
        try {
            return await productmodel.find({cat: nombreCategoria});
        } catch (error) {
            console.log(error);

        }
    }

    // Falta añadir ver emprendimiento
    async verEmprenProd(idc) {
        console.log('im looking for the entrepreneurship');
        console.log(idc);
        var empreVer;
        var id_emprendimiento;
        try {
            await productmodel.find({_id: idc}).then( (value) => {
                console.log(value);
                id_emprendimiento = value[0].id_emprendimiento;
                console.log(id_emprendimiento);
            });

            await empremodel.find({_id: id_emprendimiento}).then( (empr) => {
                empreVer = empr;
                
            });

            return empreVer;
        } catch (error) {
            console.log(error);

        }
    }


}

module.exports = new ProductService();