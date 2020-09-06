const express = require('express');
const router = express.Router();
const signin = require('../controllers/signIn-controller');

router.post('/', signin.signIn);

module.exports = router;
