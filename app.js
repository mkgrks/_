const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

// Log requests to the console.
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/app'));

module.exports = app;