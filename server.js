// server/server.js

start()
function start () {
  serverStart()
  function serverStart() {
    const express = require('express')
    const app = express()

    app.use(express.static('public'))
    app.get('/login', (req, res) => {
      res.sendFile(`${__dirname}/public/login.html`)
      // res.send(`${__dirname}`)
    })

    app.listen(process.env.PORT || 8080)

    exports.app = app
  }
}

