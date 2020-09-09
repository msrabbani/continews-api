const News = require('../models/news');

const createNews = (req, res) => {
  News.create({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    urlImage: req.body.urlImage,
    author: req.body.author,
    createdAt: new Date(),
  })
    .then((dataNews) => {
      res.send(dataNews);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllNews = (req, res) => {
  const params = {
    category: new RegExp(
      `${req.query.category ? req.query.category : ''}`,
      'g'
    ),
    title: new RegExp(`${req.query.title ? req.query.title : ''}`, 'g'),
  };
  News.find(params)
    .then((dataNews) => {
      if (dataNews.length == 0) {
        res.send({ status: false, data: 'no data' });
      }
      res.send({ status: true, data: dataNews, totalNews: dataNews.length });
    })
    .catch((err) => {
      res.send({ status: false, data: err });
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
  News.findById({ _id: req.params.id }, (err, news) => {
    if (err) {
      news.send(err);
    } else {
      (news.title = req.body.title || news.title),
        (news.description = req.body.description || news.description),
        (news.category = req.body.category || news.category),
        (news.urlImage = req.body.urlImage || news.urlImage),
        (news.updatedAt = new Date());
      news.save((err, news) => {
        res.send(err ? err : news);
      });
    }
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
