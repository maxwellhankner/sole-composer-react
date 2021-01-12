const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const s3 = new aws.S3({
  secretAccessKey: process.env.S3_ACCESS_SECRET,
  accessKeyId: process.env.S3_ACCESS_KEY,
  region: 'us-east-2',
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only JPEG and PNG is allowed!'), false);
  }
};

const upload = multer({
  fileFilter,
  storage: multerS3({
    acl: 'public-read',
    s3,
    bucket: 'sole-composer-user-assets',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: 'TESTING_METADATA' });
    },
    key: function (req, file, cb) {
      // If new image, generate file name
      if (file.originalname === 'newImage') {
        const ext = file.mimetype === 'image/png' ? '.png' : '.jpg';
        cb(null, `${Date.now().toString()}${ext}`);
      }
      // Else, update existing file
      else {
        cb(null, file.originalname);
      }
    },
  }),
});

module.exports = upload;
