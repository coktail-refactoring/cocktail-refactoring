const { Bar } = require('../models');
const { NotFoundError, InternalServerError, ConflictError,} = require('../utils/customError');
const { setParameter, checkIfSame } = require('../utils/serviceMethod');
const { handleImageUpload, handleImageUpdate, deleteImage } = require('../utils/imageHandler');

function createConditions({ x1, x2, y1, y2, keyword }) {
   let conditions = {};
   if (keyword) {
      conditions.name = { $regex: new RegExp(keyword, 'i') };
   }
   if (x1 && x2 && y1 && y2) {
      conditions.x = { $gt: x1, $lt: x2 };
      conditions.y = { $gt: y1, $lt: y2 };
   }
   return conditions;
}

const barService = {
   //* 바 목록 조회
   async getBarList(query) {
      const conditions = createConditions(query);
      const { skip, limit } = setParameter(query.perPage, query.page);
      const bars = await Bar.find(conditions).skip(skip).limit(limit).lean();
      const total = await Bar.countDocuments(conditions);
      return { total, bars };
   },

   //* 바 상세 조회
   async getBar(barId) {
      const bar = await Bar.findById(barId).lean();
      if (!bar) throw new NotFoundError('바 정보 없음');
      return bar;
   },

   //* 바 등록
   async createBar(data) {
      const { name, address, time, x, y, tel } = data;
      const foundBar = await Bar.findOne({ address: address }).lean();
      if (foundBar) throw new ConflictError('이미 등록된 주소');

      let image;
      if (Array.isArray(data.newImageNames)) {
         image = await handleImageUpload(data.newImageNames);
      }

      const newBar = new Bar({ name, image, address, x, y, time, tel });
      const result = await newBar.save();
      if (!result) throw new InternalServerError('등록 안됨');
   },

   //* 바 수정
   async updateBar(barId, { name, address, time, tel, x, y, newImageNames }) {
      const foundBar = await Bar.findById(barId).lean();
      if (!foundBar) throw new NotFoundError('바 정보 없음');
      
      const image = await newImageNames?.length ? handleImageUpdate(foundBar.image, newImageNames) : undefined;
      const newBar = { name, address, time, tel, x, y, image };
      const isSame = checkIfSame(foundBar, newBar);

      if (isSame) throw new ConflictError('같은 내용 수정');

      const updateBar = await Bar.updateOne(
         { _id: barId },
         { name, image, address, time, tel, x, y, },
         { runValidators: true }
      );
      if (updateBar.modifiedCount === 0) throw new ConflictError('바 수정 실패');
   },

   //* 바 삭제
   async deleteBar(barId) {
      const foundBar = await Bar.findById(barId).lean();
      if (!foundBar) throw new NotFoundError('바 정보 없음');
      // 이미지 파일 삭제
      deleteImage(foundBar.image);

      const result = await Bar.deleteOne({ _id: barId });
      if (result.deletedCount === 0) throw new InternalServerError("바 삭제 실패");
   },
};

module.exports = barService;