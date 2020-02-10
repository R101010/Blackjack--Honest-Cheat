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

/*----- functions -----*/

// var playerHand = [];
// var dealerHand = [];

// // Starting deck value and order

// var deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
//             2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
//             2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
//             2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]

// // Takes the deck and spits out a random number from it 
// function drawRandomCard(deck) {
//     var randomDeck = Math.floor(Math.random() * deck.length)
//     return deck[randomDeck];
// }

// // Sets a pair of random numbers to the dealer and player hands
// function gameStart() {
//     playerHand = [ drawRandomCard(deck), drawRandomCard(deck)];
//     dealerHand = [ drawRandomCard(deck), drawRandomCard(deck)];
// }

// // Add up the player and dealer hands
// function handTotal(hand) {
//     var sum = 0;
//     for (var i = 0; i < hand.length; i++) {
//         sum += hand[i];
//     }
//     return sum;
// }

// // Adds an 1 card to the player hand when 'hit' it pressed
// function hit() {
//     playerHand.push(drawRandomCard(deck));

//     // console.log('Hit!');
//     // console.log('New player cards:' + playerHand);
//     if( handTotal(playerHand) > 21) {
//         console.log('Bust!');
//     }
// }

// // When the 'stay' button is pressed it has the dealer play it's round.
// function stay() {
//     console.log('Stay!');

// }

// // Returns the game back to default
// function restart() {
//     console.log('Restart!')
// }

// document.getElementById("playerHand").innerHTML;


// gameStart();
