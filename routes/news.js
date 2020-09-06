const express = require('express');
const router = express.Router();
const news = require('../controllers/news-controller');
const auth = require('../controllers/auth-controller');

router.post('/', auth.authUser, news.createNews);
router.post('/:id', auth.authUser, news.updateNews);
router.get('/', auth.authUser, news.getAllNews);
router.get('/:id', auth.authUser, news.getSingleNews);
router.delete('/:id', auth.authUser, news.deleteNews);

module.exports = router;
