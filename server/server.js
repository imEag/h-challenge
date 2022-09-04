const express = require('express');
const buildingHandler = require('./building/buildinghandler');
const bodyParser = require('body-parser')

require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/'));

app.use('/server/buildings', buildingHandler);

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;