const express = require('express');
const router = express.Router();
const user = require('../controllers/user-controller');
const auth = require('../controllers/auth-controller');

router.get('/', auth.authUser, user.getAllUser);
router.get('/:id', auth.authUser, user.getSingleUser);
router.put('/:id', auth.authUser, user.updateUser);
router.delete('/:id', auth.authUser, user.deleteUser);

module.exports = router;
