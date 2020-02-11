// Array that holds the suites
// Array that holds the card #
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
const deck = buildDeck;
/*----- app's state (variables) -----*/
let shuffledDeck = cardShuffler(deck)

/*----- cached element references -----*/
let deck = document.getElementById('pCard1');

/*----- event listeners -----*/
document.getElementById('hit').addEventListener('click', hitTest);
document.getElementById('stay').addEventListener('click', stayTest);
document.getElementById('restart').addEventListener('click', restartTest);


/*----- functions -----*/
// buildDeck opens a new pack of cards.
function buildDeck() {
    let openNewPack = [];
    suits.forEach(function(suit) {
        ranks.forEach(function(rank) {
            openNewPack.push({
                face: `${suit}${rank}`,
                value: Number(rank) || (rank === 'A' ? 11 : 10)
            });
        });
    });
    return openNewPack;
}

function cardShuffler() {
    let randomIndex = Math.floor(Math.random() * deck.length)
    return deck[randomIndex];
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

