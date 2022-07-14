const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const app = require('./app');
const cors = require('cors');

colors.setTheme({
  success: ['bgGreen', 'black', 'underline', 'bold'],
});
app.use(cors()); // Enable CORS
app.use(express.json());
app.use(express.static('build')); // serve static files (css & js) from the 'public' directory

dotenv.config();
const PORT = process.env.PORT || 6000;

app.listen(
  process.env.PORT || PORT,
  console.log(`SERVER IS LISTENING ON PORT ${PORT}`.success)
);
