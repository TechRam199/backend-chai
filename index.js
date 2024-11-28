const express = require('express')
require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("Hi there Login First")
  })
  app.get('/login', (req, res) => {
    res.send("<h1> Please login at my First Server </h1>")
  })
  app.get('/youtube', (req, res) => {
    res.send("<h2>  Chai or Code backend</h2>")
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})