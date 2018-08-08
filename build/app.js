'use strict';

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application.
require('./routes')(app);
app.get('*', function (req, res) {
  return res.status(200).send({
    message: 'Welcome to the beginning of nothingness.'
  });
});

app.listen(3000, function () {
  console.log("Proses listen berjalan");
});

module.exports = app;