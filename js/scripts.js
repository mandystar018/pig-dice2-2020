//Game Constructor & Prototypes
function Game() {
  this.players = [];
  this.switch = 1;//<-- This will be used to find player id (switch will change after roll and then you can match it to player id)
  this.currentId = 0;//<-- This is will be used to assign player id
}

Game.prototype.assignId = function(player) {
  this.currentId += 1;
  return this.currentId;
}

Game.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players.push(player);
}

//Player Constructor

function Player() {
  this.turnTotal = 0;
  this.score = 0;
}
//Factory Functions
function generateRandomNumber() {
  let randomNumber = Math.floor((Math.random() * 6) + 1);
  $("#rollValue").text(randomNumber);
  return randomNumber;
}

let turnTotal = 0;
function rollDice() {
  let roll = generateRandomNumber();
  if (roll === 1) {
    turnTotal += 0;
    $("#playerScore").text(turnTotal);
  } else {
    turnTotal += roll;
  }
  $("#playerScore").text(turnTotal);
}


$(document).ready(function() {
  $("#newGame").click(function() {
    const game = new Game();
    const player1 = new Player();
    const player2 = new Player();
    game.addPlayer(player1);
    game.addPlayer(player2);
    $("#rules").hide();
    $(".showLater").show();
    console.log(game);
    console.log(game.players[0]);
  })
  $(".roll").click(function(event) {
    generateRandomNumber();
  });
});