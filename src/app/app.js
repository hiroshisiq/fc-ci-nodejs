const express = require('express')
const app = express()

let counter = 0

app.get('/', (req, res) => {
  counter += 1
  res.send(`<h1>Welcome!</h1><p>This page was visited ${counter} time${counter>1?'s':''}.</p>`)
})

module.exports = app;