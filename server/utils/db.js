const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    const MONDODB_URI = process.env.MONDODB_URI || 'mongodb://127.0.0.1:27017/h_challenge'
    mongoose.Promise = global.Promise;

    const conn = await mongoose.connect(MONDODB_URI);
}

module.exports = connectDB;