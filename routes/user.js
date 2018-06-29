const express = require('express');

const router = express.Router();
const {
  getAllUsers,
  updateUserInfo,

} = require('../controllers/user');

router.get('/', getAllUsers);
router.post('/info', updateUserInfo);

module.exports = router;
