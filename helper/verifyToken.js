const jwt = require('jsonwebtoken');
require('dotenv').config();

var userInfo = function (token, callback) {
  if (token) {
    jwt.verify(token, process.env.JWT_KEY_SCRT, (err, decoded) => {
      if (decoded) {
        // console.log(decoded, 'wew');
        callback(decoded);
      } else {
        return 'No info';
      }
    });
  } else {
    return 'No token';
  }
};

module.exports = {
  userInfo,
};
