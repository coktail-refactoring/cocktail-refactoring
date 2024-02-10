const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');
const { UnauthorizedError } = require('../utils/customError');

module.exports = {
   setToken(user) {
      const token = jwt.sign(
         { id: user._id, isAdmin: user.isAdmin, isWrite: user.isWrite },
         jwtSecret,
         { expiresIn: '24h', }
      );

      return token;
   },
   verifyUserToken(req) {
      let user;
      if (req.cookies.jwtToken) {
         user = jwt.verify(req.cookies.jwtToken, jwtSecret, function (err, decoded) {
            if (err) throw new UnauthorizedError('토큰 검증 실패');
            return decoded;
         });
      }
      return user;
   }
};