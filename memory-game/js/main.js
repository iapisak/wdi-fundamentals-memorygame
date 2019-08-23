var cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	}
];

//===========Reset Bord-Game==================//
var resetGame = document.querySelector("span");
	resetGame.addEventListener('click', resetGameBoard);

function resetGameBoard() {
	x = document.querySelectorAll("img");
	for (var i=0; i<cards.length; i++) {
		x[i].src='images/back.png';
	}
};
//===========Reset Bord-Game==================//

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] !== cardsInPlay[1]) {
		alert("Sorry, try again.");
		cardsInPlay.splice(0,2);
		resetGameBoard();		
	} else console.log("You found a match!");
		cardsInPlay.splice(0,2);		
	// flipCard();
	// if (cardsInPlay[0] === cardsInPlay[1]) {
	//   alert("You found a match!");
	// } else {
	//   alert("Sorry, try again.");
	// } 
};

function flipCard() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);	
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
    	var newListItem = document.createElement('img');
    	newListItem.setAttribute('src', 'images/back.png');
    	newListItem.setAttribute('data-id', i);
    	newListItem.addEventListener('click', flipCard); 
    	document.getElementById('game-board').appendChild(newListItem);
	}
};

createBoard();



	



	





