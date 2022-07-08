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
    // console.log({ company, position, expertise });
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

const filterLocation = (request, response) => {
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

const filterContract = (request, response) => {
  if (request.query) {
    const { contract } = request.query;
    console.log({ contract });
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

const crossFilter = (request, response) => {
  if (request.query) {
    const { location, expertise } = request.query;
    console.log({ expertise, location });

    pool.query(
      `SELECT * FROM dev_jobs WHERE content ->> 'location' ILIKE $1 AND content -> 'requirements' ->> 'items' ILIKE $2`,
      [`%${location}%`, `%${expertise}%`],
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
  filterLocation,
  filterContract,
  getSinglejob,
  crossFilter,
};
