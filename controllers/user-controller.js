const User = require('../models/user');

const getAllUser = (req, res) => {
  User.find({})
    .then((dataUser) => {
      res.send(dataUser);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getSingleUser = (req, res) => {
  User.find({ _id: req.params.id })
    .then((dataUser) => {
      res.send(dataUser);
    })
    .catch((err) => {
      res.send(err);
    });
};

const updateUser = (req, res) => {
  User.update(
    { _id: req.params.id },
    {
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    }
  )
    .then((dataUser) => {
      res.send(dataUser);
    })
    .catch((err) => {
      res.send(err);
    });
};

const deleteUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((dataUser) => {
      res.send('user has been delete');
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
