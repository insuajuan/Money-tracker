const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const { sequelize, User } = require('./models')

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
app.post('/users', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.create({ email, password})
        return res.json(user)
    } catch (err) {
        console.log(err);
        return res.status(400).json(err)
    }
});

app.get('/users', async (req, res) => {
    try{
        const users = await User.findAll();
        return res.json(users);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err)
    }
})

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