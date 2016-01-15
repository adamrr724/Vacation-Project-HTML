
$(function() {
  $("form#vacasubmit").submit(function(event) {
var age = $("input#age").val();
var gender = $("select#gender").val();
var weather = $("select#weather").val();
var terrain = $("select#terrain").val();
var activity = $("select#activity").val();

var pictures = ['<img src="img/bahamas.jpg" />','<img src="img/orlando.jpg" />', '<img src="img/portland.jpg" />','<img src="img/vail.jpg" />',];

  if (weather === 'Warm' && activity === 'Beach Bum'){
    $('#generator').after(pictures[0]);
    $('#bahamas').show();
    $('#generator').show();
  }
   else if (weather === 'Warm' && activity === 'Amusement Parks'){
     $('#generator').after(pictures[1]);
     $('#orlando').show();
     $('#generator').show();
   }
   else if (weather === 'Mild' && activity === 'Hike in the Forest'){
     $('#generator').after(pictures[2]);
      $('#portland').show();
      $('#generator').show();
   }
   else if (weather === 'Cold' && activity === 'Ski Bum'){
     $('#generator').after(pictures[3]);
      $('#vail').show();
      $('#generator').show();
    }
   else {
     alert('Your answers are too different for us to make a proper assessment. For example, you may have chosen that you like to be a warm ski bum! This may be ideal, but not realistic for us to give you a good result. Please try again! :)')
   }

    event.preventDefault();
  });

});
