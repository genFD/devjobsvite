const express = require('express');
const userRoutes = require('./routes/user.routes');
const { handleError } = require('./middleware/error');

const app = express();

app.use(express.json());

app.use('/api/devjobs', userRoutes);
app.use(handleError);

module.exports = app;
