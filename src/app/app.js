const express = require('express')
const app = express()
const port = 3000

let counter = 0

app.get('/', (req, res) => {
  counter += 1
  res.send(`<h1>Welcome!</h1><p>This page was visited ${counter} time${counter>1?'s':''}.</p>`)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})