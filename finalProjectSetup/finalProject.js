//  Create player key pair for local storage
let playerKey = "playerNames";
let players = [];

//  Create score key pair for local storage
let playerScore = "playerScores";
let scores = [];

//  Create key pair for player turn count
let playerTurn = "playerCount";
let playerTurnCount = [];

//  Create variable for game mode.  1 for weight and 2 for length
let gameMode = 0;

//  Create an array of fishes and junk
let fishes = ["Carp", "Trout", "Bass", "Cat Fish"];
let junk = ["An Old Boot", "A Rusty Can", "A Tire", "A Trash Bag"];

//  Create 2 variables, playerCurrent and scoreCurrent
let playerCurrent = players[0];
let scoreCurrent = 0;
let player;
let turn = 0;

//  Initial page load functions, set up the UI
function pageLoad() {
  //  Look for any data stored in local storage
  /*if(localStorage.getItem(playerKey) !== null) {
    //  Load in user string using key
    console.log("we got data!!");// Debug code
    let playerString = localStorage.getItem(playerKey);
    playerString = JSON.parse(playerString);
    $(playerString).each(function() {
      console.log(this);//  Debug code
      //addPlayersToGame(this);--add this function later
    });*/

  //  Create the click event for the play button
  $("#btnPlay").on("click", function() {
    goFish();
  });//  End click event for play button

setPlayers();

};//  End function pageLoad

pageLoad();

function goFish() {
  //  Set up the click listeners for the game
  $("td").on("mouseenter", function() {
    this.style.backgroundColor="black";
  });

  $("td").on("mouseleave", function() {
    this.style.backgroundColor="";
  });

  $("td").on("click", function() {
    castLine();
  });//  End click events fish from grid
}

function setPlayers() {
  let playerNumber;
  for(playerNumber = 0; playerNumber < 2; playerNumber++) {
    let playerName = getPlayerName(playerNumber + 1);
    players.push(playerName);
    addPlayerToGame(playerNumber, playerName);
  }
  //  Store players in local storage
  savePlayers();
}//  End function setPlayers

//  The castLine function
function castLine() {
  //  Set the chance to catch a fish as opposed to junk at 80%
  let fishChance = Math.floor(Math.random() * 100) +1;
  //console.log(fishChance);
  switch (fishChance / 10) {
    case 8:
      getPenguin();
      break;
    case 7:
      getJunk();
      break;
    default:
      getFish();

      turn ++;
      console.log(turn);

  }
  //player1TurnCount++;
  //console.log(player1TurnCount)
};//  End function castLine

//  the setPlayer function
function savePlayers() {
  //  Store the players in the players array
  let playerString = JSON.stringify(players);
  localStorage.setItem(playerKey, playerString);
}

//  The addPlayerToGame function
function addPlayerToGame(playerNumber, playerName) {
  if(playerNumber == 0) {
    $("#player1Name").val(playerName)
  }

  if(playerNumber == 1) {
    $("#player2Name").val(playerName);
  }
}
//  Create variables for player high scores

//  Create click event to generate random fish size and change display on UI
function getFish() {
  //  Generate random number for size of fish (4-24)
  let fishSize = Math.floor((Math.random() * 20) + 4);
  console.log(fishSize);//  Debug code

  //  Generate a random number to pull a fish from the fishes array
  let index = Math.floor((Math.random() * 4));
  //console.log(index);//  Debug code
  let fishType = fishes[index];
  //console.log(fishType);//  Debug code

  displayCatch(fishType, fishSize);
  updateScore (fishSize);
}

function getJunk() {
  let junkItem = Math.floor(Math.random() * 4);
  let junkCatch = junk[junkItem];
  alert("You caught " + junkCatch);
}

function getPenguin() {
  alert("OH NOES, YOU CAUGHT A PENGUIN THAT ATE ALL YOUR FISH!!!")
  scoreCurrent = 0;
  setScore(scoreCurrent);
}

function displayCatch(type, size) {
  alert("You caught a " + size + " inch " + type);
}
//  Also have it put the player's name and size of fish in the square
//  Create a function to save score to local storage
//  Check is current score is higher than high score, if so set current to high score
function updateScore(size) {
  if (size > scoreCurrent) {
    scoreCurrent = size;
    console.log(scoreCurrent);//  Debug codep
    //$("#player1Score").val(scoreCurrent);
    setScore(scoreCurrent);
  }
}//  End function updateScore

function setScore(scoreCurrent) {
  $("#player1Score").val(scoreCurrent);
}
//  the getPlayerName function
function getPlayerName(playerNumber) {
  let name = prompt("Player " + playerNumber + " enter your name")
  return name;
}
/*ADD A CHANCE TO CATCH A PENGUID, IF CAUGHT IT EATS ALL YOUR FISH AND YOU GET A ZERO*/
