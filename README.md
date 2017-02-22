# cards-deck-ecma6
This project is a cards deck implemented in ecmaScript 6 that provides the following API:

```javascript
//initilization of the module
var cardsDeck = new CardDeck();

//function to create a french suit deck
//addJokers is a boolean "true" if the jokers should be added to the cards deck.
//default true.
cardsDeck.startFrenchSuitDeck(addJokers);

//function to create a spanish deck
//addJokers is a boolean "true" if the jokers should be added to the cards deck.
//default true.
cardsDeck.startSpanishDeck(addJokers);

//function to create a custom deck
//suits is an array representing the custom suits for the cards deck.
//ranks is an array representing the custom ranks for the cards deck.
//addJokers is a boolean "true" if the jokers should be added to the cards deck.
//default true.
cardsDeck.startCustomDeck(suits, ranks, addJokers);

//function to shuffle the deck
//numberOfShuffles defines how many times de array is shuffle.
//default 1.
cardsDeck.shuffle(numberOfShuffles);

//function to obtain numberOfCards cards
//from the top of the cards deck.
//numberOfCards is the number of cards that the user wants
//to obtain from the cards deck.
//if numberOfCards <= cards.length a custom exception is handle an logged into the console.
cardsDeck.getCardsFromTheTop(numberOfCards);

//function to obtain numberOfCards cards
//from the bottom of the cards deck.
//numberOfCards is the number of cards that the user wants
//to obtain from the cards deck.
//if numberOfCards <= cards.length a custom exception is handle an logged into the console.
cardsDeck.getCardsFromTheBottom(numberOfCards);

//function that return the amount of cards left in the deck.
cardsDeck.remainingCards();

//function to restore cards to the initial state.
cardsDeck.resetCardDeck();

```
