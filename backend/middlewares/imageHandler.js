const multer = require('multer');
const path = require('path');
const upload = multer({ storage: multer.memoryStorage() });

const asyncHandler = require('express-async-handler');

// 이미지 업로드 미들웨어
const uploadImage = upload.fields([{ name: 'images', maxCount: 10 }, { name: 'recipeImages', maxCount: 10 }, { name: 'content', maxCount: 10 }]);

// 이미지 업로드 핸들러
function processImages(files) {
   // console.log(files)
   return files.map(file => {
      const newFileName = file.originalname.split('.')[0] + '_' + 1000 * Math.random().toFixed(3) + Date.now() + path.extname(file.originalname);
      return { buffer: file.buffer, imageName: `/images/${newFileName}` };
   });
}

const imageHandler = asyncHandler(async (req, res, next) => {
   // console.log(req.body)
   if (req.files.images) req.body.newImageNames = processImages(req.files.images);
   if (req.files.recipeImages) req.body.recipeImageNames = processImages(req.files.recipeImages);

   next();
});

module.exports = { uploadImage, imageHandler };
/**
 * const { originalname } = file;
 * const baseName = path.basename(originalname, path.extname(originalname));
 * const newFileName = `${baseName}_${Date.now()}${path.extname(originalname)}`;
 */