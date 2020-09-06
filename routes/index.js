const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth-controller');

router.post('/:id', auth.authUser);
module.exports = router;
