const { InternalServerError, } = require('../utils/customError');
const fs = require('fs').promises;
const path = require('path');

module.exports = {
   async handleImageUpload(newImageNames) {
      const [firstFile, ...restFiles] = newImageNames;
      const files = [firstFile, ...restFiles];
      await Promise.all(files.map(file => fs.writeFile(`.${file.imageName}`, file.buffer)));
      return firstFile.imageName;
   },

   async handleImageUpdate(oldImage, newImageNames) {
      const imagePath = path.join(__dirname, '../', oldImage);
      await fs.unlink(imagePath, (err) => {
         if (err.code !== 'ENOENT') {
            throw new InternalServerError('이미지 삭제 실패');
         }
      });
      return newImageNames[0].imageName;
   },

   async deleteImage(image) {
      const imagePath = path.join(__dirname, '../', image);
      await fs.unlink(imagePath, (err) => {
         if (err.code !== 'ENOENT') {
            throw new InternalServerError('이미지 삭제 실패');
         }
      });
   },
};