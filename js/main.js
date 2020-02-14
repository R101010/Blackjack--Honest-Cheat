//stay: Player hits 'stay' it's the dealers turn
//Hit: Adds another card to HTML, add value of card to running total, checks for bust, checks for winner.

/*----- constants -----*/
const suits = ['s', 'c', 'd', 'h'];
const ranks = [02 , 03, 04, 05, 06, 07, 08, 09, 10, 'J', 'Q', 'K', 'A'];

    //Gets its value from buildDeck
const deck = [];

/*----- app's state (variables) -----*/

    // Holds deck value for cardShuffler, then is shuffled by it.
var shuffledDeck = [];

    //Gets push from Player deal.
var player = [];

    //Gets push from dealer deal.
var dealer = [];

    //Gets the value from playerTotal
var playerTotals = [];
    //Gets the value from dealerTotal
var dealerTotals = [];

/*----- cached element references -----*/

    // Holds the card face value to display corresponding card on screen
var playerDisplayedCards = [];
var dealerDisplayedCards = [];

/*----- event listeners -----*/

document.getElementById('hit').addEventListener('click', hit);
document.getElementById('stay').addEventListener('click', stay);
document.getElementById('restart').addEventListener('click', restart);

/*----- functions -----*/

init();

function init(){
    buildDeck()
    cardShuffler()
    playerDeal()
    playerDeal()
    dealerDeal()
    dealerDeal()
    playerCardDisplay()
    dealerCardDisplay()
    playerTotal()
    dealerTotal()
    render()
    checkForBlackjack()
};

    // This sends everything from JS to HTML to view
function render(){

};
    //Opens a new pack of cards. 
function buildDeck() {
    suits.forEach(function(suit) {
        ranks.forEach(function(rank) {
            deck.push({
                face: `${suit}${rank}`,
                value: Number(rank) || (rank === 'A' ? 11 : 10)
            });
        });
    });
};
    // Takes the new deck and shuffles it
function cardShuffler() {
    shuffledDeck = [...deck];
    for (var i = 1; i < 1000; i++) {
        var spot1 = Math.floor((Math.random() * shuffledDeck.length));
        var spot2 = Math.floor((Math.random() * shuffledDeck.length));
        var temp = shuffledDeck[spot1];
        shuffledDeck[spot1] = shuffledDeck[spot2];
        shuffledDeck[spot2] = temp;
        
    }
};
    //Deals cards to player
function playerDeal(){
    var card = shuffledDeck.pop();
    player.push(card)

};
    //Deals cards to dealer
function dealerDeal(){
    var card = shuffledDeck.pop();
    dealer.push(card)
};
    // Gets the player card from player hand
function playerCardDisplay() {
    playerDisplayedCards = []
    for (var i = 0; i < player.length; i++) {
        playerDisplayedCards.push(player[i]["face"])
    } 
};

    // Gets the dealer card from player hand
function dealerCardDisplay() {
    dealerDisplayedCards = []
    for (var i = 0; i < dealer.length; i++) {
        dealerDisplayedCards.push(dealer[i]["face"])
    } 
};
    // Checks for Blackjack at start-up
function checkForBlackjack(){
    if (playerTotals === 21) {
        document.getElementById("gameMessages").innerHTML = "BlackJack!";
};

    //Compares card totals and decides a winner
function checkWin() {



    };
};

    //Grabs the value of both cards and adds them playerTotals
function playerTotal() {
    var sum = 0;
    for (var i = 0; i < player.length; i++){
        sum += player[i]["value"];
    } playerTotals.push(sum)
};
    //Grabs the value of both cards and adds them to dealerTotals
function dealerTotal() {
    var sum = 0;
    for (var i = 0; i < dealer.length; i++){
        sum += dealer[i]["value"];
    } dealerTotals.push(sum)
};

// Adds a card to the player or dealer hand and runs checkWin.
function hit() {
    var temp = 0;
    playerDeal();
    playerTotal();
    playerCardDisplay();
    temp = playerTotals.pop();
    if ( temp > 21) {
        document.getElementById("gameMessages").innerHTML = "You hit on that...BUST!";
    } else {
        document.getElementById("gameMessages").innerHTML = `Remember to stay on 17 you have ${temp}`;
    }
};

function dealerHit() {
    while (dealerTotals <= 16) {
    dealerDeal();
    dealerTotal();
    dealerCardDisplay();
   dealerTotals = dealerTotals.pop();
   console.log(dealerTotals)
    }
    if (dealerTotals < 21) {
        console.log(" Over 16 but less than 21")
    } else if ( dealerTotals > 21) {
        document.getElementById("gameMessages").innerHTML = "Dealer Bust, You win!";
    };
    console.log("Almost there");
};

function checkWinner() {
    if (playerTotals > dealerTotals && playerTotals <= 21){
     console.log('Win Bitches');
} else if (playerTotals = dealerTotals) {
    console.log('Push');
} else if (dealerTotals > playerTotals && dealerTotals <= 21 ){
    console.log('Dealer Wins');
}
};
    // This will run the dealer function 
function stay() {
    dealerHit();
    checkWinner()    
};

// Refreses the page instead of reloading the values
function restart() {
    location.reload();
};