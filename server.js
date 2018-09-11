const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const axios = require('axios');
const cheerio = require('cheerio');

const db = require('./models');

let PORT = 3000;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/web-scraper', { useNewUrlParser: true });

app.get('/', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`App running on localhost:${PORT}!`);
});