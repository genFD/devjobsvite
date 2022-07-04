const pool = require('../db/config');
const { StatusCodes } = require('http-status-codes');

// @desc    Get all users
// @route   GET /api/devjobs/users
// @access  Private/Admin

const getDevjobs = (request, response) => {
  pool.query(
    'SELECT * FROM dev_jobs ORDER BY id ASC LIMIT 9',
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(StatusCodes.OK).json(results.rows);
    }
  );
};

module.exports = { getDevjobs };
