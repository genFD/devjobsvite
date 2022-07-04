const express = require('express');
const api = require('./routes/api');
const { handleError } = require('./middleware/error');

const app = express();

app.use(express.json());

app.use('/v1', api);

app.use(handleError);

module.exports = app;
