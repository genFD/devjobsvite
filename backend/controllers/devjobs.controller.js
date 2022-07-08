const pool = require('../db/config');
const { StatusCodes } = require('http-status-codes');

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
    const { company, position, expertise } = request.query;

    pool.query(
      `SELECT * FROM dev_jobs WHERE 
      content ->> 'position' ILIKE $1 
      OR content ->> 'company' ILIKE $2
      OR content -> 'requirements' ->> 'items' ILIKE $3
      `,
      [`%${position}%`, `%${company}%`, `%${expertise}%`],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(StatusCodes.OK).json(results.rows);
      }
    );
  }
};

const filterByLocation = (request, response) => {
  if (request.query) {
    const { location } = request.query;

    pool.query(
      `SELECT * FROM dev_jobs WHERE content ->> 'location' ILIKE $1`,
      [`%${location}%`],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(StatusCodes.OK).json(results.rows);
      }
    );
  }
};

const filterByContract = (request, response) => {
  if (request.query) {
    const { contract } = request.query;
    pool.query(
      `SELECT * FROM dev_jobs WHERE content ->> 'contract' ILIKE $1`,
      [`%${contract}%`],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(StatusCodes.OK).json(results.rows);
      }
    );
  }
};

module.exports = {
  getDevjobs,
  filterDevjobs,
  filterByLocation,
  filterByContract,
  getSinglejob,
};
