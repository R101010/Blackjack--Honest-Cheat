// Function that makes the deck by combining suites and #s
// Function to shuffle the deck
// Function that deals the cards
// Icebox: Betting, Insurance,  
// Buttons:
//Restart: Resets the game to it's original state
//stay: Player hits 'stay' it's the dealers turn
//Hit: Adds another card to HTML, add value of card to running total, checks for bust, checks for winner.
// function called winner that compares Player to dealer, closest to 21 wins.

/*----- constants -----*/
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02' , '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];

//Gets its value from buildDeck
const deck = new Array();
/*----- app's state (variables) -----*/

// Holds deck value for cardShuffler, then is shuffled by it.
var shuffledDeck = deck;
var player = [];
var dealer = [];

/*----- cached element references -----*/


/*----- event listeners -----*/
document.getElementById('hit').addEventListener('click', hitTest);
document.getElementById('stay').addEventListener('click', stayTest);
document.getElementById('restart').addEventListener('click', restartTest);


/*----- functions -----*/

init()
function init(){
    buildDeck()
    cardShuffler()
    playerDeal()
    playerDeal()
    dealerDeal()
    dealerDeal()
    render()
}

function render(){

}

// buildDeck opens a new pack of cards. 

function buildDeck() {
    suits.forEach(function(suit) {
        ranks.forEach(function(rank) {
            deck.push({
                face: `${suit}${rank}`,
                value: Number(rank) || (rank === 'A' ? 11 : 10)
            });
        });
    });
}

// Takes the new deck and shuffles it
function cardShuffler() {
    for (var i = 1; i < 1000; i++) {
        var spot1 = Math.floor((Math.random() * shuffledDeck.length));
        var spot2 = Math.floor((Math.random() * shuffledDeck.length));
        var temp = shuffledDeck[spot1];
        shuffledDeck[spot1] = shuffledDeck[spot2];
        shuffledDeck[spot2] = temp;
    }

}



function playerDeal(){
    var card = shuffledDeck.pop();
    player.push(card)

}
function dealerDeal(){
    var card = shuffledDeck.pop();
    dealer.push(card)
}



function hitTest() {
    console.log('Hit is working')
}
function stayTest() {
    console.log('Stay is working');
}
function restartTest() {
    console.log('Restart is working');
}

