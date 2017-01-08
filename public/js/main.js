start()
function start () {
  'use strict'

  function getDueDate () {
    return $.get('/dueDate')
      .then(data => {
        return new Date(data)
      })
  }

  $(document).ready(function() {
    getDueDate().then(dateObj => {
      console.log(dateObj)
      $('#dueDate').append($("<p></p>"))
        .text(dateObj.toDateString())
    })
    
    getShifts()
    function getShifts () {
      $.ajax({
        type: "GET",
        url: "/shifts",
        datatype: "json",
        contentType: "application/json; charset=utf-8",
        success: (data) => {
          console.log(data) // DELETE ME LATER
          $('#calendar').fullCalendar({
            // put your options and callbacks here
            events: data.events,
            /*
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
            */
            color: 'yellow',   // an option!
            textColor: 'black' // an option!
            eventClick: function(event) {
              alert('event.url')
            }
          });
        }
      })
    }
  })
}

