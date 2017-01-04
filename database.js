// database.js
//// Create interface to database

start()
function start () {
  'use strict'

  const ASQ = require('asynquence-contrib')
  const fs = require('fs')

  const readFile = ASQ.wrap(fs.readFile)
  const writeFile = ASQ.wrap(fs.writeFile)

  const methods = {
    getJ: getJsonObj 
  }
  module.exports = methods

  function getJsonObj () {
    let ret = this
    readFile('cal-data.json', 'utf8')
      .val(function (data) {
        ret = JSON.parse(data)
      })
    return ret
  }

    console.log(getJsonObj())
// END OF MODULE
}
