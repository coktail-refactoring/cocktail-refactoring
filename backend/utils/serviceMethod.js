const { BadRequestError } = require("./customError");

module.exports = {
   setParameter(perPage, page, type) {
      const limit = parseInt(perPage) || 10;
      const skip = parseInt(page) ? parseInt(page - 1) * limit : 0;
      const typesMap = {
         'cocktails': ['CocktailReview'],
         'recipes': ['DiyRecipeReview'],
         'default': ['CocktailReview', 'DiyRecipeReview']
       };
       
      //  const types = typesMap[type] ?? (() => { throw new BadRequestError('타입 오류'); })();
      const types = typesMap[type] ?? typesMap['default'];
       return { limit, skip, types };
   },

   checkIfSame(foundBar, newBar) {
      const targetKeys = Object.keys(newBar);
      return targetKeys.every((key) => foundBar[key] === newBar[key]) && targetKeys.length === Object.keys(foundBar).length;
   },
};
