const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

const axios = require('axios');
const cheerio = require('cheerio');

const db = require('./models');

let PORT = 3000;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

mongoose.connect('mongodb://localhost/web-scraper', { useNewUrlParser: true });

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`App running on localhost:${PORT}!`);
});