
$(function() {
  $("form#vacasubmit").submit(function(event) {
var age = $("input#age").val();
var gender = $("select#gender").val();
var weather = $("select#weather").val();
var terrain = $("select#terrain").val();
var activity = $("select#activity").val();

var pictures = ['<img class="img" src="img/bahamas.jpg" />','<img src="img/orlando.jpg" />', '<img src="img/portland.jpg" />','<img src="img/vail.jpg" />','<img src="img/paris.jpeg" />', ];

  if (weather === 'Warm' && activity === 'Beach Bum'){
    $('#generator').after(pictures[0]);
    $('#bahamas').show();
    $('.matches, #generator').show();
      $ (".matches").click(function() {
        $(this).hide();
      });
  }
  else if (weather === 'Warm' && activity === 'Amusement Parks' || weather === 'Mild' && activity === 'Amusement Parks' ){
     $('#generator').after(pictures[1]);
     $('#orlando').show();
     $('.matches, #generator').show();
       $ (".matches").click(function() {
         $(this).hide();
       });
   }
  else if(weather === 'Mild' && activity === 'Hike in the Forest' || weather === 'Cold' && activity === 'Hike in the Forest' || weather === 'Mild' && activity === 'Shopping' && terrain === 'Mountain'){
     $('#generator').after(pictures[2]);
      $('#portland').show();
      $('.matches, #generator').show();
        $ (".matches").click(function() {
          $(this).hide();
        });
   }
  else if (weather === 'Cold' && activity === 'Ski Bum' || weather === 'Mild' && activity === 'Ski Bum' || weather === 'Cold' && activity === 'Shopping'){
     $('#generator').after(pictures[3]);
      $('#vail').show();
      $('.matches, #generator').show();
        $ (".matches").click(function() {
          $(this).hide();
        });
    }
  else if (weather === 'Mild' && activity === 'Shopping' || weather === 'Warm' && activity === 'Shopping') {
      $('#generator').after(pictures[4]);
       $('#paris').show();
       $('.matches, #generator').show();
         $ (".matches").click(function() {
           $(this).hide();
         });
       }
   else {
     alert('Your answers are too different for us to make a proper assessment. For example, you may have chosen that you like to be a warm ski bum! This may be ideal, but not realistic for us to give you a good result. Please try again! :)')
   }

    event.preventDefault();
  });

});
