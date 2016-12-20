// server/server.js

start()
function start () {
  serverStart()
  function serverStart() {
    const express = require('express')
    const app = express()

    app.use(express.static('public'))

    app.listen(process.env.PORT || 8080)
  }
}
