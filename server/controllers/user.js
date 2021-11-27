const {sequelize, User} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

function generateAccessToken(id) {
    return jwt.sign( {id: id}, process.env.TOKEN_SECRET, { expiresIn: 86400,});
  };

module.exports.register = async (req, res) => {
    try {
        const email = req.body.email;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = await User.create({ email: email, password: hashedPassword });
        const token = generateAccessToken(newUser.uuid)
        console.log(token);
        return res.status(200).json(newUser);

    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    } 
};

module.exports.login = async (req, res)=>{
    try{
        const user = await User.findOne({ where: {email: req.body.email} });
        !user && res.status(404).json("user not found");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("wrong password");

        const token = generateAccessToken(user.uuid);
        return res.status(200).json({my_token: token});
        
    } catch(err) {
        console.log(err)
        return res.status(500).json(err);
    }   
};