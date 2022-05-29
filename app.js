const express = require('express');
const app = express();

const morgan = require('morgan');
const dotenv = require('dotenv');

const taskRoutes = require('./routes/taskRoute');
const errorController = require('./controller/errorController');
const appError = require('./utils/appError');


app.use(express.json());
dotenv.config({ path: './config.env' });
app.use(morgan('dev'));


app.use('/api/v1/task', taskRoutes);

app.use('*', (req, res, next) => { next(new appError('Path not found ', 404)) });

app.use(errorController)


module.exports = app;