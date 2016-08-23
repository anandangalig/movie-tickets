
function Ticket(age, time, movie) {
  this.ageInput = age;
  this.timeInput = time;
  this.movieInput = movie;
}

// Ticket.prototype.showMeTheMoney() {
//   $("ul").text(price);
// };

$(document).ready(function() {
  $("form#userInput").submit(function (event) {
    event.preventDefault();

    var inputtedAge = parseInt($("input#userAge").val());
    var inputtedTime = $("input:radio[name=time]:checked").val();
    var inputtedMovie = $("#movie").val();
    var newTicket = new Ticket (inputtedAge, inputtedTime, inputtedMovie);

    console.log(newTicket);


  });
});
