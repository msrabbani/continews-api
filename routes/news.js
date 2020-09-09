const express = require('express');
const router = express.Router();
const news = require('../controllers/news-controller');

router.post('/', news.createNews);
router.put('/:id', news.updateNews);
router.get('/', news.getAllNews);
router.get('/:id', news.getSingleNews);
router.delete('/:id', news.deleteNews);

module.exports = router;
