const express = require('express');
const userRoutes = require('../routes/user.routes');
const devjobsRoutes = require('../routes/devjobs.routes');

const api = express.Router();

api.use('/devjobs/users', userRoutes);
api.use('/devjobs/jobs', devjobsRoutes);

module.exports = api;
