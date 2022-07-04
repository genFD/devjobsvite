const pool = require('../db/config');
const { StatusCodes } = require('http-status-codes');

//testing psql database with crud ops

// @desc : Auth user  & get Token
// @route : POST /api/devjobs/users/login
// @access : Public

// @desc : Register new user
// @route : POST /api/devjobs/users/register
// @access : Public

// @desc : Update user  profile
// @route : PUT /api/devjobs/users/profile
// @access : Private

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email, password } = request.body;

  pool.query(
    'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4',
    [name, email, password, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(StatusCodes.OK).send(`User modified with ID: ${id}`);
    }
  );
};

// @desc    Delete user
// @route   DELETE /api/devjobs/users/:id
// @access  Private/Admin

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(StatusCodes.OK).send(`User deleted with ID: ${id}`);
  });
};

// @desc    Get all users
// @route   GET /api/devjobs/users
// @access  Private/Admin

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(StatusCodes.OK).json(results.rows);
  });
};

// @desc    Get user by ID
// @route   GET /api/devjobs/users/:id
// @access  Private/Admin

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(StatusCodes.OK).json(results.rows);
  });
};

// @desc    create new users by ID
// @route   POST /api/devjobs/users/:id
// @access  Private/Admin

const createUser = (request, response) => {
  const { name, email, password } = request.body;

  pool.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
    [name, email, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(StatusCodes.CREATED)
        .send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
