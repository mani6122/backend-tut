// console.log("Hello World")
require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello Mani welcome to the series of teh backend')
})
app.get('/instagram', (req, res) => {
    res.send("https://instagram.com")
})
app.get('/login', (req, res) => {
    res.send("<h1>Login at Falcons.com</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})