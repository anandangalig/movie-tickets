function Customer(name) {
  this.nameInput = name;
  this.tickets = [];
}

function Ticket(age, time, movie) {
  this.ageInput = age;
  this.timeInput = time;
  this.movieInput = movie;
}
Ticket.prototype.ticketPrice = function () {
  var price = 5;

  if (this.ageInput <= 60) {
    price += 3;
  }
  if (this.timeInput === "full-price") {
    price += 3;
  }
  if (this.movieInput === "new-release") {
    price += 4;
  }
  return price;
};

$(document).ready(function() {
  $("form#userInput").submit(function (event) {
    event.preventDefault();

    var inputtedAge = parseInt($("input#userAge").val());
    var inputtedTime = $("input:radio[name=time]:checked").val();
    var inputtedMovie = $("#movie").val();
    var newTicket = new Ticket (inputtedAge, inputtedTime, inputtedMovie);


    $("ul").append("<li>" + "Your ticket will cost you: " + "$"  + newTicket.ticketPrice() + "</li>");
  });
});

    // if (newTicket.ageInput >= 60 && newTicket.timeInput === "matinee" && newTicket.movieInput === "old-release") {
    //   var price = 5;
    //   console.log(price)
    // } else if (newTicket.ageInput >= 60 && newTicket.timeInput === "matinee" && newTicket.movieInput === "new-release") {
    //   var price = 9;
    //   console.log(price);
    // } else if (newTicket.ageInput >= 60 && newTicket.timeInput === "full-price" && newTicket.movieInput === "new-release") {
    //   var price = 12;
    //   console.log(price);
    // }  else if (newTicket.ageInput >= 60 && newTicket.timeInput === "full-price" && newTicket.movieInput === "old-release") {
    //   var price = 8;
    //   console.log(price);
    // } else if (newTicket.ageInput <= 60 && newTicket.timeInput === "matinee" && newTicket.movieInput === "new-release") {
    //   var price = 12;
    //   console.log(price);
    // } else if (newTicket.ageInput <= 60 && newTicket.timeInput === "matinee" && newTicket.movieInput === "old-release") {
    //   var price = 8;
    //   console.log(price);
    // } else if (newTicket.ageInput <= 60 && newTicket.timeInput === "full-price" && newTicket.movieInput === "new-release") {
    //   var price = 15;
    //   console.log(price);
    // } else if (newTicket.ageInput <= 60 && newTicket.timeInput === "full-price" && newTicket.movieInput === "old-release") {
    //   var price = 12;
    //   console.log(price);
    // }
