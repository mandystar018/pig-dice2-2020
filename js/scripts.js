//Game Constructor & Prototypes
function Game() {
  this.players = [];
  this.switch = 1;//<-- This will be used to find player id (switch will change after roll and then you can match it to player id)
  this.currentId = 0;//<-- This is will be used to assign player id
}

Game.prototype.assignId = function(player) {
  this.currentId += 1;//<-- This will update game current id
  return this.currentId;
}

Game.prototype.addPlayer = function(player) {
  player.id = this.assignId();//<--This will assign unique player id
  this.players.push(player);//<--This will add player to game object
}

//Player Constructor & Prototypes

function Player() {
  this.turnTotal = 0;
  this.score = 0;
}

Player.prototype.diceRoll = function() {
  let diceRoll = generateRandomNumber();
  if (diceRoll === 1) {
    this.turnTotal += 0;
    this.score += 0;
    $("#turnScore").text("0");
    $("#currentScore").text(this.score);
  } else {
    this.turnTotal += diceRoll;
    $("turnScore").text(turnTotal);
  }
}
//Factory Functions
function generateRandomNumber() {
  let randomNumber = Math.floor((Math.random() * 6) + 1);
  $("#rollValue").text(randomNumber);
  return randomNumber;
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