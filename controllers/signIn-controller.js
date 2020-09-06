const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { formatString, emptyArray } = require('../helper/commondHelper');

const signIn = (req, res) => {
  let nameFormat = formatString(req.body.name);
  User.find({
    name: nameFormat,
  })
    .then((data_user) => {
      if (emptyArray(data_user)) {
        res.send({ status: false, message: "you haven't registered yet!" });
      }
      if (bcrypt.compareSync(req.body.password, data_user[0].password)) {
        let createToken = {
          _id: data_user[0]._id,
          name: data_user[0].name,
          email: data_user[0].email,
          salt: data_user[0].salt,
        };
        let token = jwt.sign(createToken, process.env.JWT_KEY_SCRT);
        res.send({ status: true, message: 'success', auth: token });
      } else {
        res.send({
          status: false,
          message: 'wrong password!',
        });
      }
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = {
  signIn,
};
