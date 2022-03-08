const ordermodel = require('../models/order.js');
const usermodel = require('../models/user.js');
const detailOrderModel = require('../models/detail_order.js');

class OrderService {
    OrderService() { }

    async getOrder() {
        try {
            return await ordermodel.find();
        } catch (error) {
            console.log(error);
            return error;

        }
    }

    //Get ordenes del usuario
    async getOrdenesUsuario(idu) {
        try {
            return await ordermodel.find({id_user: idu});
        } catch (error) {
            console.log(error);
            return error;

        }
    }

     //Get ordenes del emprendimiento
     async getOrdenesEmprendimiento(ide) {
        try {
            return await ordermodel.find({id_order: ide});
        } catch (error) {
            console.log(error);
            return error;

        }
    }
    //Get productos de una orden
    async getProductosOrden(ido) {
        console.log(ido);
        try {
            return await detailOrderModel.find({id_order: ido});
        } catch (error) {
            console.log(error);
            return error;

        }
    }

    async guardarOrder(orden = new ordermodel()) {
        try {
            var orderGuardada;
            await ordermodel.create(orden).then( (value) => {
                orderGuardada =  value;
            });

            return orderGuardada;

        } catch (error) {
            console.log(error);

        }
    }
    async guardarDetalleOrden(detalle = new detailOrderModel()) {
        try {
            var detalleGuardada;
            await detailOrderModel.create(detalle).then( (value) => {
                detalleGuardada =  value;
            });

            return detalleGuardada;

        } catch (error) {
            console.log(error);

        }
    }

    async eliminarOrder(idc) {
        console.log(idc);
        var ordenEliminada;
        try {
            await ordermodel.findOneAndRemove({
                _id: idc
            }).then( (value) => {
                console.log(value);
                ordenEliminada = value;
            });

            return ordenEliminada;
        } catch (error) {
            console.log(error);

        }
    }

    async modificarOrder(ordermod) {

        var ordenModificada;
        try {
            await ordermodel.findOneAndUpdate({
                _id: ordermod._id
            }, ordermod).then( (value) => {

                ordenModificada = ordermod;
            });

            return ordenModificada;
        } catch (error) {
            console.log(error);

        }
    }

    // VER USUARIO DEL PEDIDO
    async verUsuPed(idc) {
        console.log('im looking for the client of this order');
        console.log(idc);
        var usuVer;
        try {
            await usermodel.find({id_user: idc}).then( (value) => {
                console.log(value);
                usuVer = value;
            });

            return usuVer;
        } catch (error) {
            console.log(error);

        }
    }

}

module.exports = new OrderService();