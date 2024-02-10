const { Base, } = require('../models');
const { NotFoundError, InternalServerError, ConflictError, } = require('../utils/customError');
const setParameter = require('../utils/serviceMethod');
const { handleImageUpload, handleImageUpdate, deleteImage } = require('../utils/imageHandler');
const { checkIfSame } = require('../utils/serviceMethod');

const baseService = {
   //* 베이스 목록 조회
   async getBaseList({ perPage, page }) {
      const { skip, limit } = setParameter(perPage, page);
      const total = await Base.countDocuments();
      const bases = await Base.find({}).select('_id name image').skip(skip).limit(limit).lean();
      return { total, bases };
   },
   //* 베이스 조회
   async getBase(id) {
      const base = await Base.findById(id).lean();
      if (!base) throw new NotFoundError('Base를 찾을 수 없음');
      return base;
   },
   //* 베이스 등록
   async createBase(data) {
      const { name, newImageNames } = data;
      const foundBase = await Base.findOne({ name: name }).lean();
      if (foundBase) throw new ConflictError('이미 등록된 Base');
      let image;
      if (Array.isArray(newImageNames)) {
         image = await handleImageUpload(newImageNames);
      }
      const newBase = new Base({ name, image, });
      const result = await newBase.save();
      if (!result) throw new InternalServerError('등록 안됨');
   },
   //* 베이스 수정
   async updateBase(baseId, data) {
      const { name, newImageNames } = data;
      const foundBase = await Base.findById(baseId).lean();
      if (!foundBase) throw new NotFoundError('Base 정보 없음');

      const image = await newImageNames?.length ? handleImageUpdate(foundBase.image, newImageNames) : undefined;
      const newBase = { name, image };
      const isSame = checkIfSame(foundBase, newBase);

      if (isSame) throw new ConflictError('같은 내용 수정');
      
      const updateBase = await Base.updateOne(
         { _id: baseId },
         { name, image, },
         { runValidators: true }
      );
      if (updateBase.modifiedCount === 0) throw new InternalServerError('칵테일 수정 실패');
   },
   //* 베이스 삭제
   async deleteBase(baseId) {
      const foundBase = await Base.findById(baseId).lean();
      if (!foundBase) throw new NotFoundError('Base 정보 없음');
      // 이미지 파일 삭제
      deleteImage(foundBase.image);

      const result = await Base.deleteOne({ _id: baseId });
      if (result.deletedCount === 0) throw new InternalServerError("Base 삭제 실패");
   },
};

module.exports = baseService;