const express = require('express');

const router = express.Router();
const {
  getAllUsers,
  updateUserInfo,
  createUser

} = require('../controllers/user');

router.get('/', getAllUsers);
router.post('/', createUser);
router.post('/info', updateUserInfo);

module.exports = router;
