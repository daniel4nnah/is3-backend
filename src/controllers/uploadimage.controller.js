const imageModel = require('../models/uploadimage.js');
var ObjectId = require('mongoose').Types.ObjectId; 

class ImageService{
    ImageService() { }

    async getAllImages() {
        try {
            
            var list_images = await imageModel.find();
            console.log(list_images);
            var length_list = list_images.length;
            console.log('aaaaaa');
            console.log(length_list);
            length_list = length_list-1;
            var last_item =list_images[length_list];
            var id_last_item = list_images[length_list]._id;

            console.log(last_item);

            console.log(id_last_item)
            return list_images;
            
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
}

module.exports = new ImageService();