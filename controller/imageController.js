const multer = require("multer");
const path = require("path");
  var fs = require('fs');

module.exports = {
  async uploadImage(req, res) {
    try {
      await upload(req, res, (err) => {
        if (err) {
            console.log(err);
          res.status(400).send({
            error: err,
          });
        } else {
          res.send({
            imageUrl: req.file.filename,
          });
        }
      });
    } catch (err) {
        console.log(err);
      res.status(400).send({
        error: err,
      });
    }
  },
};

const storage = multer.diskStorage({
   destination:(req, file, callback) =>{
     
var dir = "./images/"+file.originalname;
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}
    callback(null, dir );
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + ".png");
  },
});

const upload = multer({
  storage: storage,
  limits:{
      fileSize: 1024*1024*6
      
  }
}).single("image");
