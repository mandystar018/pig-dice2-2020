//Game Constructor 
function Game() {
  this.players = [];
}

//Player Constructor

function Player() {
  this.turnTotal = 0;
  this.score = 0;
}
//Factory Functions
function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  $("#rollValue").text(randomNumber);
  return randomNumber;
}

let turnTotal = 0;
function rollDice() {
  let roll = generateRandomNumber();
  if (roll === 1) {
    let turnTotal = 0;
    $("#playerScore").text(turnTotal);
  } else {
    turnTotal += roll;
  }
  $("#playerScore").text(turnTotal);
}


$(document).ready(function() {
  $()
  $(".roll").click(function(event) {
    generateRandomNumber();
  });
});