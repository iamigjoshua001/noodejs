const express = require ('express')

const route = express.Router()


route.get('/', (req, res) => {
    res.send("welcome to admin routes!")
})
route.get('/login', (req, res) => {
    res.send("welcome to admin login!")
})

route.get('/register', (req, res) => {
    res.send("welcome to admin register!")
})
route.get('/logout', (req, res) => {
    res.send("welcome to admin post!")
})

module.exports = route;