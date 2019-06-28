/*
 -- chai
 -- mocha
 */
const express = require('express');
const bodyParser = require ('body-parser');

const app = express();
app.set("port", 3001);
app.use(bodyParser.json());

const movement = require('./routes/movement');

movement(app);

module.exports = app;