const usermodel = require('../models/user.js');

class UserService {
    UserService() { }

    async getUsers() {
        try {
            console.log('aslasdas');
            return await usermodel.find();
        } catch (error) {
            console.log(error);
            return error;

        }
    }

    async guardarUser(user = new usermodel()) {
        try {
            var userGuardado;
            await usermodel.create(user).then( (value) => {
                userGuardado =  value;
            });

            return userGuardado;

        } catch (error) {
            console.log(error);

        }
    }

    async eliminarUser(idc) {
        console.log(idc);
        var userEliminado;
        try {
            await usermodel.findOneAndRemove({
                _id: idc
            }).then( (value) => {
                console.log(value);
                userEliminado = value;
            });

            return userEliminado;
        } catch (error) {
            console.log(error);

        }
    }

    async modificarUser(usermod) {

        var userModificado;
        try {
            await usermodel.findOneAndUpdate({
                _id: usermod._id
            }, usermod).then( (value) => {

                userModificado = usermod;
            });

            return userModificado;
        } catch (error) {
            console.log(error);

        }
    }

        async loginUser(body) {
            console.log(body);
            var userloging;
            try {
                await usermodel.findOne({mail: body.mail, password: body.password}).then( (value) => {
                    console.log(value);
                    userloging = value;
                });
    
                return userloging;
            } catch (error) {
                console.log(error);
            }
        }


}

module.exports = new UserService();