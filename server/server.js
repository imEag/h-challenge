const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static(__dirname + '/'));

app.use('/server', (req, res) => {
    res.send('<h1>Hello from server</h1>');
});

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;