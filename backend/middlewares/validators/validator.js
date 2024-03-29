const { validationResult } = require('express-validator');

const validate = (validators) => {
   return async (req, res, next) => {
      await Promise.all(validators.map(validation => validation.run(req)));

      const errors = validationResult(req);
      if (errors.isEmpty()) return next();

      res.status(400).json({ message: errors.array()[0].msg });
   };
};

module.exports = validate;