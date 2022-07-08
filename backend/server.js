const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const app = require('./app');

colors.setTheme({
  success: ['bgGreen', 'black', 'underline', 'bold'],
  error: ['bgRed', 'black', 'underline', 'bold'],
});

app.use(express.json());
dotenv.config();

app.get('/', (req, res) => {
  res.json({ message: 'Node.js, Express, and Postgres API' });
});

const PORT = process.env.PORT || 6000;

const startServer = async () => {
  try {
    app.listen(
      PORT,
      console.log(`SERVER IS LISTENING ON PORT ${PORT}`.success)
    );
  } catch (error) {
    console.log(`Cannot start server : ${error}`.error);
  }
};
startServer();
