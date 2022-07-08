const express = require('express');
const router = express.Router();

const {
  getDevjobs,
  filterDevjobs,
  getSinglejob,
  filterByLocation,
  filterByContract,
} = require('../controllers/devjobs.controller');

router.route('/').get(getDevjobs);
router.route('/search').get(filterDevjobs);
router.route('/search/contract').get(filterByContract);
router.route('/search/location').get(filterByLocation);
router.route('/:id').get(getSinglejob);

module.exports = router;
