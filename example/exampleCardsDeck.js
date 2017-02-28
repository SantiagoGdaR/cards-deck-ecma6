var CardsDeck = require('../js/cardsDeck');
var User = require('./user');
//init a french suit cards deck
let cardsDeck = new CardsDeck();
cardsDeck.startFrenchSuitDeck();

console.log('Create user and assign him 5 cards...');
let user1 = new User('Peter');
let cards = cardsDeck.getCardsFromTheBottom(5);
user1.cards = cards;
console.log(user1.toString());

console.log('Create user and assign him 3 cards...');
let user2 = new User('Andrew');
let cards2 = cardsDeck.getCardsFromTheBottom(3);
user2.cards = cards2;
console.log(user2.toString());

console.log(`Eight cards were removed from the deck. Length of the cards array from the deck: ${cardsDeck.cards.length}`);
console.log('Reset cards from the deck to the initial state...');
cardsDeck.resetCardsDeck();
console.log(`Length of the cards array from the deck: ${cardsDeck.cards.length}`);

console.log('Suffle array of cards and compare first 3 positions...');
console.log(`First three position before shuffle: [${cardsDeck.cards[0].toString()}] [${cardsDeck.cards[1].toString()}] [${cardsDeck.cards[2].toString()}]`);
cardsDeck.shuffle();
console.log(`First three position after shuffle: [${cardsDeck.cards[0].toString()}] [${cardsDeck.cards[1].toString()}] [${cardsDeck.cards[2].toString()}]`);
