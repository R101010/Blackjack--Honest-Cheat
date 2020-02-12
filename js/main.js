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
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const deck = new Array();
/*----- app's state (variables) -----*/
var shuffledDeck = cardShuffler();

/*----- cached element references -----*/


/*----- event listeners -----*/
document.getElementById('hit').addEventListener('click', hitTest);
document.getElementById('stay').addEventListener('click', stayTest);
document.getElementById('restart').addEventListener('click', restartTest);


/*----- functions -----*/
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
    return deck.shift();
}

// Takes the new deck and shuffles it


function cardShuffler() {
    for (var i = 1; i < 1000; i++) {
        var spot1 = Math.floor((Math.random() * deck.length));
        var spot2 = Math.floor((Math.random() * deck.length));
        var temp = deck[spot1];
        deck[spot1] = deck[spot2];
        deck[spot2] = temp;
    }

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

