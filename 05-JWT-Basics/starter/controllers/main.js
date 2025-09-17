// check username, password in post(login) request
// if exist create new JWT
// send back to frontend

// setup authentication so only the request with JWT can access the dashboard
require('dotenv').config();
const jwt = require('jsonwebtoken')
const {BadRequest} = require('../errors/index')

const login = async (req, res) => {
    const {username, password} = req.body
    
    // mongoose validation
    // Joi
    // Check in the controller
    if(!username || !password) {
        throw new BadRequest('Please provide email and password')
    }
    
    const id = new Date().getDate()

    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})

    console.log(username, password)
    res.status(200).json({msg: 'User created', token})
}

const dashboard = async (req, res) => {
    console.log(req.user);

    const luckyNumber = Math.floor(Math.random()*100)

    res.status(200).json({msg: `Hello, ${req.user.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}