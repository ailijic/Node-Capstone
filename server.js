// server/server.js

start()
function start () {
  serverStart()
  function serverStart() {
    const express = require('express')
    const app = express()

    app.use(express.static('public'))
    console.log(__dirname)
    app.use('/fullcalendar', express.static(__dirname + '/node_modules/fullcalendar/dist/'));

    app.listen(process.env.PORT || 8080)

    exports.app = app
  }
}

