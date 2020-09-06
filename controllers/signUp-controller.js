const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { formatString } = require('../helper/commondHelper');

var signUp = (req, res) => {
  let salt = bcrypt.genSaltSync(07);
  let hash = bcrypt.hashSync(formatString(req.body.password), salt);
  let nameFormat = formatString(req.body.name);
  User.create({
    name: nameFormat,
    password: hash,
    email: req.body.email,
  })
    .then((dataUser) => {
      res.status(200).send(`created user id: ${dataUser.id.toString()}`);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  signUp,
};
