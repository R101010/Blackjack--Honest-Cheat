
/*----- constants -----*/
const suits = ['s', 'c', 'd', 'h'];
const ranks = [02 , 03, 04, 05, 06, 07, 08, 09, 10, 'J', 'Q', 'K', 'A'];
const ranksString = ["02" , "03", "04", "05", "06", "07", "08", "09", "10", 'J', 'Q', 'K', 'A'];
const ace = ['sA','hA','cA','dA'];
//Gets its value from buildDeck
const deck = [];

/*----- app's state (variables) -----*/

    // Holds deck value for cardShuffler, then is shuffled by it.
var shuffledDeck = [];

    //Gets push from Player deal.
var player = [];

    //Gets push from dealer deal.
var dealer = [];



/*----- cached element references -----*/
    //Gets the value from playerTotal
var playerTotals = [];
     //Gets the value from dealerTotal
var dealerTotals = [];
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
    document.getElementById("pCard1").className += playerDisplayedCards[0];
    document.getElementById("pCard2").className += playerDisplayedCards[1];
    document.getElementById("dCard1").className += dealerDisplayedCards[0];

};

function testAdd(){
    
};


    //Opens a new pack of cards. 
function buildDeck() {
    suits.forEach(function(suit) {
        ranksString.forEach(function(rank) {
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
    playerDisplayedCards = [];
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
};

    //Grabs the value of both cards and adds them playerTotals
function playerTotal() {
    playerTotals = 0;
    for (var i = 0; i < player.length; i++){
        playerTotals = playerTotals + parseInt(player[i]["value"]);
    }
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
    playerDeal();
    playerTotal();
    playerCardDisplay();
    document.getElementById("pCard3").className += playerDisplayedCards[2];
    document.getElementById("pCard4").className += playerDisplayedCards[3];
    if ( playerTotals > 21) {
        document.getElementById("gameMessages").innerHTML = "You hit on that...BUST!";
    } else {
        document.getElementById("gameMessages").innerHTML = `Remember to stay on 17 you have ${playerTotals}`;
    }
};

function dealerHit() {
    document.getElementById("dCard2").className += dealerDisplayedCards[1];
    while (dealerTotals <= 16) {
    dealerDeal();
    dealerTotal();
    dealerCardDisplay();
    dealerTotals = dealerTotals.pop();
    };
    document.getElementById("dCard3").className += dealerDisplayedCards[2];
    document.getElementById("dCard4").className += dealerDisplayedCards[3];
    if ( dealerTotals > 21) {
        document.getElementById("gameMessages").innerHTML = "Dealer Bust, You win!";
    };
};

function checkWinner() {
    if (playerTotals > dealerTotals && playerTotals <= 21){
        document.getElementById("gameMessages").innerHTML = 'Winner winner chicken dinner';
} else if (playerTotals === dealerTotals) {
    document.getElementById("gameMessages").innerHTML = 'Push';

} else if (dealerTotals > playerTotals && dealerTotals <= 21 ){
    document.getElementById("gameMessages").innerHTML = 'Dealer Wins';
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