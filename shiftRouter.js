
const express = require('express')
const router = express.Router()
const db = require('./database')
//const parserJson = require('body-parser').json()

router.get('/', (req, res, next) => {
  res.status(201).send('42')
  next()
    /*
  db.get().then(dbObj => {
    let shiftObj = {
      events: dbObj.scheduleArray
    }
    res.status(201).send(shiftObj)
  })
  */
}) 

  /*
router.get('/:userId', (req, res) => {
  db.get().userId.then(obj => {
    res.status(201).send(obj.toString())
  })
})
*/

exports = router
