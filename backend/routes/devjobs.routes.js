const express = require('express');
const router = express.Router();

const {
  getDevjobs,
  filterDevjobs,
  getSinglejob,
  filterLocation,
  filterContract,
  crossFilter,
} = require('../controllers/devjobs.controller');

router.route('/').get(getDevjobs);
router.route('/search').get(filterDevjobs);
router.route('/search/cross').get(crossFilter);
router.route('/search/contract').get(filterContract);
router.route('/search/location').get(filterLocation);
router.route('/:id').get(getSinglejob);

module.exports = router;
