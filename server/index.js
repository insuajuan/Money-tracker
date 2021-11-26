const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

// Set up the express app
const app = express();
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

// Routes
//auth
//operation

// Port
const PORT = 8800 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})