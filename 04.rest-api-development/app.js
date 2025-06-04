// app.js
const express = require('express');
const bookRouter = require('./book.route');

const app = express();

app.use(express.json());
app.use('/api/v1/books', bookRouter);

module.exports = app;
