const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const { sequelize } = require('./models');
const authRoute = require('./routes/auth');
const operationRoute = require('./routes/operation');

// Set up the express app
const app = express();
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/operation', operationRoute);

// Port
const PORT = 8800 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
    sequelize.authenticate().then(() => {
        console.log('Connected to DB')
    }).catch(error => {
        console.log('Error while connecting to DB', error)
    })
});