// database.js
//// Create interface to database

start()
function start () {
  'use strict'

  const fsp = require('fs-promise')

  async function getJsonObj () {
    const JsonString = await fsp.readFile('cal-data.json', 'utf8')
    return JSON.parse(JsonString)
  }

  const methods = {
    get: getJsonObj 
  }
  module.exports = methods
  /*
  getJsonObj().then(obj => {
    console.log(obj)
  })
  */
// END OF MODULE
}
