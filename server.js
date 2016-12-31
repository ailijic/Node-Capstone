// server/server.js

start()
function start () {
  'use strict'

  const bodyParser = require('body-parser')
  const parser = bodyParser.json()

  const dbConfig = require('./config')
  const shift = require('./models/shift')

  const express = require('express')
  const app = express()

  app.use(bodyParser.json());
  app.use(express.static('public'))

  const mongoose = require('mongoose');
  mongoose.connect(dbConfig.DATABASE_URL, (err) => {
    if (err) {
      console.log(`ERR: ${err}`);
    }
  });
  const startTime = '2016-12-31T13:00:00Z';
  const endTime = '2016-12-31T17:00:00Z';
  shift.create(
    {
      title: 'shift1',
      start: startTime,
      end: endTime,
      user: 'frank'
    }, 
    function(err, item){
      if(err){
        console.log(`ERR: ${err}`)
      } else {
        console.log(`MSG: Shift saved`)
      }
    }
  );

  app.get('/login', (req, res) => {
    res.sendFile(`${__dirname}/public/login.html`)
  })

  app.post('/login', parser, (req, res) => {
    console.log(req.body);
  });

  app.get('/shifts', (req, res) => {
    const moment = require('moment');
    let t = () => moment('2016-12-31T13:00:00');
    let shiftObj = {
      events: [
        {
            title  : 'shift1',
          start  : t().format(),
          end: t().add(5, 'hours').format(),
        },
        {
            title  : 'shift2',
          start  : t().subtract(4, 'hours').format(),
          end: t().format(),
        },
        {
            title  : 'event2',
            start  : '2017-01-05',
            end    : '2017-01-07'
        },
        {
            title  : 'event3',
            start  : '2017-01-09T12:30:00',
            end: '2017-01-09T17:00:00',
            allDay : false // will make the time show
        }
      ]
    }
    res.status(201)
    res.send(shiftObj)
  })
  app.listen(process.env.PORT || 8080)

  exports.app = app
}

