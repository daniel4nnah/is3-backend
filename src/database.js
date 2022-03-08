const mongoose = require('mongoose');
const dbConection = async () => {
    try {
        console.log('Conectando DB..............................................');
        mongoose.connect('mongodb://localhost:27017/myapp');
        // await mongose.connect('mongodb://localhost/myDatabase', {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // });
        console.log('CONECTADO...................................................');

    } catch (error) {

        throw new Error(error);

    }
}

module.exports = {
    dbConection
};