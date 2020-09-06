const jwt = require('jsonwebtoken');
require('dotenv').config();

const authUser = function (req, res, next) {
  let token = req.headers.token;
  jwt.verify(token, process.env.JWT_KEY_SCRT, (err, decoded) => {
    if (decoded) {
      req['dataUser'] = decoded;
      next();
    } else {
      res.send(err);
    }
  });
};

module.exports = {
  authUser,
};
