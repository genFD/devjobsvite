const express = require('express');
const router = express.Router();

const { getDevjobs } = require('../controllers/devjobs.controller');

router.route('/').get(getDevjobs);

module.exports = router;
