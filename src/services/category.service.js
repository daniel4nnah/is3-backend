const categorymodel = require('../models/category.js');

class CategoryService {
    CategoryService() { }

    async getCategory() {
        try {
            console.log('aslasdas');
            return await categorymodel.find();
        } catch (error) {
            console.log(error);
            return error;

        }
    }

    async guardarCategory(category = new categorymodel()) {
        try {
            var categoryGuardado;
            await categorymodel.create(category).then( (value) => {
                categoryGuardado =  value;
            });

            return categoryGuardado;

        } catch (error) {
            console.log(error);

        }
    }

    async eliminarCategory(idc) {
        console.log(idc);
        var categoryEliminado;
        try {
            await categorymodel.findOneAndRemove({
                _id: idc
            }).then( (value) => {
                console.log(value);
                categoryEliminado = value;
            });

            return categoryEliminado;
        } catch (error) {
            console.log(error);

        }
    }

    async modificarCategory(catemod) {

        var categoryModificado;
        try {
            await categorymodel.findOneAndUpdate({
                _id: catemod._id
            }, catemod).then( (value) => {

                categoryModificado = catemod;
            });

            return categoryModificado;
        } catch (error) {
            console.log(error);

        }
    }

}

module.exports = new CategoryService();