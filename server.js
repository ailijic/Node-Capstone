// server/server.js

start()
function start () {
  'use strict'

  const bodyParser = require('body-parser')
  const parser = bodyParser.json()

  const express = require('express')
  const app = express()

  app.use(express.static('public'))
  
  app.get('/login', (req, res) => {
    res.sendFile(`${__dirname}/public/login.html`)
  })

  app.post('/login', parser, (req, res) => {
    console.log(req.body);
  });

  app.listen(process.env.PORT || 8080)

  exports.app = app
}

