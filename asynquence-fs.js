// asynquence-fs.js

start()
function start () {
  'use strict'

  const fs = require('fs')  
  const ASQ = require('asynquence-contrib')
  
  const readfile = ASQ.wrap(fs.readFile)
  const writeFile = ASQ.warp(fs.writeFile)

  function example () {
    readfile("cal-data.json",{ encoding: "utf8" })
      .val(function(contents){
        console.log(contents) // file contents
      })
      .or(function(err){
        console.log(err) // oops, `err` in reading file!
      });
  }
}
