require('dotenv').config();
const express = require('express');
const app = express();
var multer = require('multer');
const morgan = require('morgan');

app.use('/uploads', express.static('./uploads'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(morgan('dev'));
app.use(require('./routes/user.route'))
app.use(require('./routes/emprendimiento.route'))
app.use(require('./routes/producto.route'))
app.use(require('./routes/order.route'))
app.use(require('./routes/donation.route'))
app.use(require('./routes/category.route'))
app.use(require('./routes/uploadimage.route'))

module.exports = app;