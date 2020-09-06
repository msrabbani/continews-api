const News = require('../models/news');
const { userInfo } = require('../helper/verifyToken');

const createNews = (req, res) => {
  let token = req.headers.token;
  userInfo(token, function (result) {
    console.log(result, 'nih result');
    News.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      urlImage: req.body.urlImage,
      author: result._id,
      createdAt: new Date(),
    })
      .then((dataNews) => {
        res.send(dataNews);
      })
      .catch((err) => {
        res.send(err);
      });
  });
};

const getAllNews = (req, res) => {
  let token = req.headers.token;
  userInfo(token, function (result) {
    News.find({ author: result._id })
      .then((dataNews) => {
        res.send(dataNews);
      })
      .catch((err) => {
        res.send(err);
      });
  });
};

const getSingleNews = (req, res) => {
  News.find({ _id: req.params.id })
    .then((dataNews) => {
      res.send(dataNews);
    })
    .catch((err) => {
      res.send(err);
    });
};

const updateNews = (req, res) => {
  let token = req.headers.token;
  userInfo(token, function (result) {
    News.findById({ _id: req.params.id }, (err, news) => {
      if (err) {
        news.send(err);
      } else {
        if (news.author === result._id) {
          (news.title = req.body.title || news.title),
            (news.description = req.body.description || news.description),
            (news.category = req.body.category || news.category),
            (news.urlImage = req.body.urlImage || news.urlImage),
            (news.updatedAt = new Date());

          news.save((err, news) => {
            res.send(err ? err : news);
          });
        } else {
          res.send({ message: 'Not authorized' });
        }
      }
    });
  });
};

const deleteNews = (req, res) => {
  News.deleteOne({ _id: req.params.id })
    .then((dataNews) => {
      res.send('News has been delete');
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  createNews,
  getAllNews,
  getSingleNews,
  updateNews,
  deleteNews,
};
