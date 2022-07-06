const express = require('express');
const router = express.Router();

const {
  getDevjobs,
  filterDevjobs,
  getSinglejob,
} = require('../controllers/devjobs.controller');

router.route('/').get(getDevjobs);
router.route('/:id').get(getSinglejob);
router.route('/search?').get(filterDevjobs);

module.exports = router;
