start();
function start () {
  'use strict';

  const db = require('./database');


 const express = require('express');
 const app = express();

 // app.use(bodyParser.json());
 app.use(express.static('public'));

 app.get('/login', (req, res) => {
   res.sendFile(`${__dirname}/public/login.html`);
 });

 // app.post('/login', parser, (req, res) => {
 //   console.log(req.body);
 // });
 //
 //  app.get('/shifts', (req, res) => {
 //    db.get().then(dbObj => {
 //      let shiftObj = {
 //        events: dbObj.scheduleArray
 //      }
 //      res.status(201).send(shiftObj)
 //    })
 //  })
 //
 //  app.get('/dueDate', (req, res) => {
 //    let dueDate = new Date('20 December 2016')
 //    res.status(201).send(dueDate.toISOString())
 //  })
 //
 //  const shiftRouter = require('./shiftRouter')
 //  app.use('/shifts', shiftRouter)
  
  var birds = require('./birds')
  app.use('/birds', birds)
  
  app.listen(process.env.PORT || 8080)
  exports.app = app
}

