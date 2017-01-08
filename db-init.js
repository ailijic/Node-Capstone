start()
function start () {
  'use strict'

  const bodyParser = require('body-parser')
  const parser = bodyParser.json()

  const dbConfig = require('./config')
  const shift = require('./models/shift')

  const mongoose = require('mongoose');
  mongoose.connect(dbConfig.DATABASE_URL, (err) => {
    if (err) {
      console.log(`ERR: ${err}`);
    }
  });
  const startTime = '2016-12-31T13:00:00Z';
  const endTime = '2016-12-31T17:00:00Z';
  let fs = require('fs');
  fs.readFile('cal-data.json', 'utf8', (err, data) => {
    var obj = JSON.parse(data);
    console.log(data);
    obj.scheduleArray.forEach((obj, index, array) => {
      shift.create(
        {
          title: obj.user,
          start: obj.start,
          end: obj.end,
          user: obj.user,
        }, 
        function(err, item){
          if(err){
            console.log(`ERR: ${err}`)
          } else {
            console.log(`MSG: Shift saved`)
          }
        }
      );
    });
  });
}

