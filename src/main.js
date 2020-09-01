import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import './img/pig.jpg';

import { Game } from './scripts.js';
import { Player } from './scripts.js';

Player.prototype.diceRoll = function() {
  let diceRoll = generateRandomNumber();
  if (diceRoll === 1) {
    this.turnTotal = 0; //<-- This will update player's key(turnTotal) value
    this.score += 0; //<-- This will update players key(score) value
    $("#turnScore").text(" ");
    $("#currentScore").text(" ");
    hold(this.id); 
    alert("You rolled a one :( Next player's turn!");
  } else {
    this.turnTotal += diceRoll; //<--This will update player's key(turnTotal) value
    $("#turnScore").text(this.turnTotal);
    $("#currentScore").text(this.score);
  }
};
//Factory Functions
function generateRandomNumber() {
  let randomNumber = Math.floor((Math.random() * 6) + 1);
  $("#rollValue").text(randomNumber);
  return randomNumber;
}

let game = new Game();//<--This is global object

function hold() {   
  let currentPlayer = game.lookupPlayer(game.switch); //<--This will link player id
  console.log(currentPlayer);
  currentPlayer.score += currentPlayer.turnTotal; //<--This will update players key(score)
  currentPlayer.turnTotal = 0; //<--This will reset player's key(turnTotal)
  if (currentPlayer.score >= 100) {
    alert("Player " + game.switch + " wins!");
    $("#showLater").hide();
    $("#rules").show();
  } else if (game.switch == 1) {
    game.switch = 2; //<--This will change game switch to 2 if it is currently at 1
    $("#turnScore").text(" ");
    $("#currentScore").text(" ");
  } else {
    game.switch = 1; //<--This will change game switch to 1 if it is currently at 2
    $("#turnScore").text(" ");
    $("#currentScore").text(" ");
  }
  console.log(currentPlayer);
}

$(document).ready(function() {
  $("#newGame").click(function() {
    const player1 = new Player();
    const player2 = new Player();
    game.addPlayer(player1);
    game.addPlayer(player2);
    $("#rules").hide();
    $(".showLater").show();
  
    $(".roll").click(function() {
      let currentPlayer = game.lookupPlayer(game.switch);
      console.log(currentPlayer);
      currentPlayer.diceRoll();

  $(".hold").click(function() {
    let currentPlayer = game.lookupPlayer(game.switch);
    hold(currentPlayer);
     });
   });
  });
});