const express = require('express');

const router = express.Router();
const {
  getAllUsers,
  createUser,
  createDepartment

} = require('../controllers/user');

router.get('/', getAllUsers);
router.post('/', createUser);
router.post('/department', createDepartment);

module.exports = router;
