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

Game.prototype.lookupPlayer = function(id) {
  for (let i = 0; i < this.players.length; i++) { //<--This will loop through players in game
    if (this.players[i]) { //<--This will ensure there are players 
      if (this.players[i].id == id) { //<-- This will check if player's id matches parameter(id)
        return this.players[i]; //<-- This will return mathcing player id
      }
    }
  };
  return false; //<--This will return false if no matching id is found
}

//Player Constructor & Prototypes

function Player() {
  this.turnTotal = 0;
  this.score = 0;
}

//User Interface Logic

Player.prototype.diceRoll = function() {
  let diceRoll = generateRandomNumber();
  if (diceRoll === 1) {
    this.turnTotal += 0; //<-- This will update player's key(turnTotal) value
    this.score += 0; //<-- This will update players key(score) value
    $("#turnScore").text("0");
    $("#currentScore").text(this.score);
  } else {
    this.turnTotal += diceRoll; //<--This will update player's key(turnTotal) value
    $("turnScore").text(turnTotal);
  }
}
//Factory Functions
function generateRandomNumber() {
  let randomNumber = Math.floor((Math.random() * 6) + 1);
  $("#rollValue").text(randomNumber);
  return randomNumber;
}

function hold(id) {
  let currentPlayer = game.
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