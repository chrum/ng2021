const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');

const scoresRouter = require('./routes/scores');
const authRouter = require('./routes/auth');

const app = express();

app.use(logger('dev'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', scoresRouter);
app.use('/check-token', authRouter);
app.use('/scores', scoresRouter);

module.exports = app;
