function Shift (start, end, user) {
  this.start = start;
  this.end = end;
  this.user = user;
  this.getObj = function () {
    return { 
      start: this.start,
      end: this.end,
      user: this.user
    };
  };
}

const moment = require('moment')

myShift = new Shift(moment('2016-12-01T09:00:00'), moment('2016-12-01T13:00:00'), 'Andrew');
console.log(myShift.getObj());

