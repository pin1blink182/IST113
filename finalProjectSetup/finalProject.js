//  Create player key pair for local storage
let playerKey = "playerNames";
let players = [];

//  Create score key pair for local storage
let playerScore = "playerScores"
let scores = [];

//  Create an array of fishes and junk
let fishes = ["Carp", "Trout", "Bass", "Cat Fish"];
let junk = ["Old Boot", "Rusty Can", "Tire", "Trash Bag"];

//  Create player/high score key pair for local storage
//  Create 2 arrays, playerHigh and scoreHigh^^
let playerHigh = [];
let scoreHigh = [];

//  Create 2 variables, playerCurrent and scoreCurrent
let playerCurrent ;
let scoreCurrent = 0;

//  Create variables for game save state: players and scores
let player1TurnCount = 0;
let Player2TurnCount = 0;

//  Initial page load functions, set up the UI
function pageLoad() {
  //  Look for any data stored in local storage
  if(localStorage.getItem(playerKey) !== null) {
    //  Load in user string using key
    console.log("we got data!!");// Debug code
    let playerString = localStorage.getItem(playerKey);
    playerString = JSON.parse(playerString);

    $(playerString).each(function() {
      console.log(this);//  Debug code
      //addPlayersToGame(this);--add this function later
    });
  };
  //  If any data is stored, load it into the page
  //  Read in plaerHigh and scoreHigh arrays^^

  //  Create the click event for the play button
  $("#btnPlay").on("click", function() {
    //  Get player names
    let player1Name = $("#player1Name").val();
    console.log(player1Name);//  Debug code
    players.push(player1Name);

    let player2Name = $("#player2Name").val();
    console.log(player2Name);//  Debug code
    players.push(player2Name);

    //  Store players in local storage
    storePlayers(player1Name, player2Name);

  });//  End click event for play button

};//  End function pageLoad

//  Call the page load function
pageLoad();

//  Create the click events to fish from the grid
//  Have the click event change the clicked squre to indicate it's been used
$("td").on("mouseenter", function() {
  this.style.backgroundColor="black";
});
$("td").on("mouseleave", function() {
  this.style.backgroundColor="white";
});
$("td").on("click", function() {
  playerFish();
});//  End click events fish from grid

//  The playerFish function
function playerFish() {
  //  Set the chance to catch a fish as opposed to junk at 80%
  let fishChance = Math.floor((Math.random() * 100) +1);
  console.log(fishChance);
  if (fishChance < 80) {
    generateFish();
  } else {
    alert("Oh noes!!!  You caught junk!!!")
  };
  player1TurnCount++;
  console.log(player1TurnCount)
};//  End function playerFish

//  the setPlayer function
function storePlayers(player1, player2) {
  //  Store the players in the players array
  let playerString = JSON.stringify(players);
  localStorage.setItem(playerKey, playerString);

}
//  Create variables for player high scores

//  Create click event to generate random fish size and change display on UI
function generateFish() {
  //  Generate random number for size of fish (4-24)
  let fishSize = Math.floor((Math.random() * 20) + 4);
  console.log(fishSize);//  Debug code

  //  Generate a random number to pull a fish from the fishes array
  let index = Math.floor((Math.random() * 4));
  //console.log(index);//  Debug code
  let fishType = fishes[index];
  console.log(fishType);//  Debug code

  displayCatch(fishType, fishSize);
  updateScore (fishSize);
};

function displayCatch(type, size) {
  alert("You caught a " + size + " inch " + type);
}
//  Also have it put the player's name and size of fish in the square
//  Create a function to save score to local storage
//  Check is current score is higher than high score, if so set current to high score
function updateScore(size) {
  if (size > scoreCurrent) {
    size = scoreCurrent;
    console.log(scoreCurrent);//  Debug code
  }
}//  End function updateScore
/*ADD A CHANCE TO CATCH A PENGUID, IF CAUGHT IT EATS ALL YOUR FISH AND YOU GET A ZERO*/
