const pool = require('../db/config');
const { StatusCodes } = require('http-status-codes');

// @desc    Get all users
// @route   GET /api/devjobs/users
// @access  Private/Admin

const getDevjobs = (request, response) => {
  pool.query('SELECT * FROM dev_jobs', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(StatusCodes.OK).json(results.rows);
  });
};

const getSinglejob = (request, response) => {
  const { id } = request.params;
  pool.query(`SELECT * FROM dev_jobs WHERE id = $1`, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(StatusCodes.OK).json(results.rows);
  });
};

const filterDevjobs = (request, response) => {
  if (request.query) {
    const { company, position } = request.query;
    console.log({ company, position });
    pool.query(
      `SELECT * FROM dev_jobs WHERE content ->> 'company' LIKE INITCAP($1) OR content ->> 'position' LIKE INITCAP($2)`,
      ['%' + company + '%', '%' + position + '%'],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(StatusCodes.OK).json(results.rows);
      }
    );
  }
};

module.exports = { getDevjobs, filterDevjobs, getSinglejob };
