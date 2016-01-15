
$(function() {
  $("form#vacasubmit").submit(function(event) {
var age = $("input#age").val();
var personality = $("select#personality").val();
var gender = $("select#gender").val();
var weather = $("select#weather").val();
var terrain = $("select#terrain").val();
var activity = $("select#activity").val();

var pictures = ['<img src="img/bahamas.jpg" />',];

  if (age >= 18 && gender === 'Male' || 'Female' && weather === 'Warm'){
    $('#generator').after(pictures[0]);
    $('#bahamas').show();
  }
   else if (age <= 35 && gender === 'Female' && personality === 'Serious'){
     $('#result').after(pictures[1]);
   }
   else if (age <= 35 && gender === 'Male' && personality === 'Serious'){
     $('#result').after(pictures[0]);
   }
   else if (age >= 35 && gender === 'Female' && personality === 'Serious'){
     $('#result').after(pictures[4]);
   }
   else if (age <= 35 && gender === 'Male' && personality === 'Goofy'){
     $('#result').after(pictures[2]);
   }
   else if (age <= 35 && gender === 'Female' && personality === 'Goofy'){
     $('#result').after(pictures[5]);
   }

   $('#generator').show();

    event.preventDefault();
  });

});
