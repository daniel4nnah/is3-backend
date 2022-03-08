const multer = require('multer');
const Tea = require('../models/uploadimage.js');
const ImageService = require('../controllers/uploadimage.controller.js');

const path= require('path') //new

// const upload = multer();
multer();

//GET una imágen
const getOneTea = async(req, res) => {
    const image = await Tea.find()
   res.json(image)
    // let name = req.params.name; //get the tea name

    // //find the specific tea with that name
    // Tea.findOne({name:name}, (err, data) => {
    // if(err || !data) {
    //     return res.json({message: "Tea doesn't exist."});
    // }
    // else return res.json(data); //return the tea object if found
    // });
};

//POST tea
const newTea = async(req, res) => {
    //check if the tea name already exists in db
    //Tea.findOne({ name: req.body.name }, (err, data) => {
        //if tea not in db, add it
        const file = req.file
        if (!file) {
            const error = new Error('Please upload a file')
            error.httpStatusCode = 400
            return next("hey error")
        }

            try {
            console.log('Entré al try');
            //create a new tea object using the Tea model and req.body
            const newTea = new Tea({
                image: file.path
                // name: req.body.name,
                // image: req.file.path, // placeholder for now
            })
            
            //new
            const savedimage= await newTea.save()
            res.json(savedimage)

            // save this object to database
            // newTea.save((err, data)=>{
            //     if(err) return res.json({Error: err});
            //     return res.json(data);
            // })
        //if there's an error or the tea is in db, return a message 
            } catch (error) {
                console.log(error);
            return error;
            }
                    
        
    //})    
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
      },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const uploadImg = multer({storage: storage}).single('image');

// Get all images
const consultarImagenes = async (req, res) => {
    console.log('gets here1');
    res.json({
        imagenes: await ImageService.getAllImages()
    });
}


module.exports = {newTea, uploadImg, getOneTea, consultarImagenes}