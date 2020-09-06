const express = require('express');
const router = express.Router();

const signup = require('../controllers/signUp-controller');

router.post('/', signup.signUp);

module.exports = router;
