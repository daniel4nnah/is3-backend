const entremodel = require('../models/emprendimiento.js');
const usermodel = require('../models/user.js');

class EmprendimientoService {
    EmprendimientoService() { }

    async getEmprendimiento() {
        try {
            return await entremodel.find();
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async guardarEntre(empre = new entremodel()) {
        try {
            var entreGuardado;
            var userModificado;
            await entremodel.create(empre).then( (value) => {
                entreGuardado =  value;
            });
            const update = {
                "$set": {
                    "role" : "e"
                }
            }
            console.log(entreGuardado);

              await usermodel.findOneAndUpdate({
                _id: entreGuardado.id_user
            }, update).then( (usermod) => {
                console.log(usermod);
                userModificado = usermod;
            });

            return entreGuardado;

        } catch (error) {
            console.log(error);

        }
    }

    async eliminarEntre(idc) {
        console.log(idc);
        var entreEliminado;
        try {
            await entremodel.findOneAndRemove({
                _id: idc
            }).then( (value) => {
                console.log(value);
                entreEliminado = value;
            });

            return entreEliminado;
        } catch (error) {
            console.log(error);

        }
    }

    async modificarEntre(entremod) {

        var entreModificado;
        try {
            await entremodel.findOneAndUpdate({
                _id: entremod._id
            }, entremod).then( (value) => {

                entreModificado = entremod;
            });

            return entreModificado;
        } catch (error) {
            console.log(error);

        }
    }

    // VER USUARIO DUEÑO DEL EMPRENDIMIENTO?¿
    // async verEmpre(idc) {
    //     console.log('im here');
    //     console.log(idc);
    //     var usuVer;
    //     var id_usuario;
    //     try {
    //         await entremodel.find({_id: idc}).then( (value) => {
    //             id_usuario = value[0].id_user;
    //             console.log(id_usuario);
    //         });

    //         await usermodel.find({_id: id_usuario}).then( (user) => {
    //             usuVer = user;
                
    //         });

    //         return usuVer;
    //     } catch (error) {
    //         console.log(error);

    //     }
    // }

    // VER USUARIO DUEÑO DEL EMPRENDIMIENTO?¿
    async verEmpre(idc) {
        console.log('im here');
        console.log(idc);
        var empVer;
        try {
            await entremodel.findOne({id_user: idc}).then( (emp) => {
                empVer = emp;
            });

            return empVer;
        } catch (error) {
            console.log(error);

        }
    }

    // OBTIENE EMPRENDIMIENTO?¿
    async getEmpreById(ide) {
        var empVer;
        try {
            await entremodel.findOne({_id: ide}).then( (emp) => {
                empVer = emp;
            });

            return empVer;
        } catch (error) {
            console.log(error);

        }
    }

}

module.exports = new EmprendimientoService();