const express = require('express');
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

const router = express.Router();

router.route('/users').get(getUsers).post(createUser);
router.route('/users/:id').get(getUserById).delete(deleteUser).put(updateUser);

module.exports = router;
