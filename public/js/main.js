start()
function start () {
  'use strict'

  $(document).ready(function() {
    // page is now ready, initialize the calendar...
    $('#calendar').fullCalendar({
      // put your options and callbacks here
      events: [
        {
          title: 'Event1',
          start: '2016-12-04'
        },
        {
          title: 'Event2',
          start: '2016-12-05'
        }
        // etc...
      ],
      color: 'yellow',   // an option!
      textColor: 'black' // an option!
    });
  })
}

