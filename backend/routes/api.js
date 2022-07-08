const express = require('express');

const devjobsRoutes = require('../routes/devjobs.routes');

const api = express.Router();

api.use('/devjobs/jobs', devjobsRoutes);

module.exports = api;
