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

/*----- app's state (variables) -----*/

/*----- cached element references -----*/

/*----- event listeners -----*/
document.getElementById('hit').addEventListener('click', hitTest);
document.getElementById('stay').addEventListener('click', stayTest);
document.getElementById('restart').addEventListener('click', restartTest);


/*----- functions -----*/

function hitTest() {
    console.log('The hit button is working');
}
function stayTest() {
    console.log('The stay button is working');
}
function restartTest() {
    console.log('The restart button is working');
}