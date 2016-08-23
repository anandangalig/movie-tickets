//Business logic
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

// Front-end logic
$(document).ready(function() {
  $("#add-ticket").click(function () {
    $("#new-tickets").append ('<div class="new-ticket">' +
                                '<label for="userAge">Please enter your age: </label>' +
                                '<input id="userAge" type="number" class="form-control">' +
                                '<label for="movie">Please select a movie: </label>' +
                                '<select class="form-control" id="movie">' +
                                  '<option value="new-release">Jason Bourne</option>' +
                                  '<option value="new-release">Suicide Squad</option>' +
                                  '<option value="old-release">Lion King</option>' +
                                  '<option value="old-release">Titanic</option>' +
                                '</select>' +
                                '<label for="movie">Please select a time: </label>' +
                                '<select class="form-control" id="time">' +
                                  '<option value="matinee">3:30 PM</option>' +
                                  '<option value="matinee">4:30 PM</option>' +
                                  '<option value="full-price">5:30 PM</option>' +
                                  '<option value="full-price">6:30 PM</option>' +
                                '</select>' +
                              '</div>')
  });


  $("form#userInput").submit(function (event) {
    event.preventDefault();

    var inputtedName = $("input#userName").val();

    var newCustomer = new Customer(inputtedName);

    $(".new-ticket").each(function () {
      var inputtedAge = $(this).find("input#userAge").val();
        inputtedAge = parseInt(inputtedAge);
      var inputtedTime = $(this).find("#time").val();
      var inputtedMovie = $(this).find("#movie").val();
      var newTicket = new Ticket (inputtedAge, inputtedTime, inputtedMovie);
      newCustomer.tickets.push(newTicket);

      $("ul").append("<li>" + "Your ticket will cost you: " + "$"  + newTicket.ticketPrice() + "</li>");
      $("ul").append("<li>" + "Your ticket will cost you: " + "$"  + newTicket.ticketPrice() + "</li>");

        console.log(newCustomer);
    });



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
