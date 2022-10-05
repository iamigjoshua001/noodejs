const express = require ('express')
const {checkUser, checkEmail} = require ('../middlewares/userMiddleware')

const route = express.Router()

route.get('/', (req, res) => {
    res.send("welcome to users routes!")
})
route.post('/login', checkUser, checkEmail, (req, res) => {
    res.send("welcome to users login!")
})

route.get('/register', (req, res) => {
    res.send("welcome to users register!")
})
route.get('/post', (req, res) => {
    res.send("welcome to users post!")
})

module.exports = route;