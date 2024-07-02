import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // specify the destination directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // generate a unique filename
  }
});

const upload = multer({ storage: storage, limits: { fileSize: 50000000 } });

export default upload;