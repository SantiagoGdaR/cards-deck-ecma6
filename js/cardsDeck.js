var CardsDeckFactory = require('./cardsDeckFactory');
var DeckException = require('./deckException');

module.exports = class CardsDeck{
    constructor(){
        this._cards = [];
        this._cardsInitalState = [];
    }

    get cards(){ return this._cards };

    //function to create a french suit deck
    //addJokers is a boolean "true" if the jokers should be added to the card deck.
    //default true.
    startFrenchSuitDeck(addJokers = true){
        this._cards = CardsDeckFactory.createFrenchSuitDeck(addJokers);
        this._cardsInitalState = this._cards.slice();
    }

    //function to create a spanish deck
    //addJokers is a boolean "true" if the jokers should be added to the card deck.
    //default true.
    startSpanishDeck(addJokers = true){
        this._cards = CardsDeckFactory.createSpanishDeck(addJokers);
        this._cardsInitalState = this._cards.slice();
    }

    //function to create a custom deck
    //suits is an array representing the custom suits for the card deck.
    //ranks is an array representing the custom ranks for the card deck.
    //addJokers is a boolean "true" if the jokers should be added to the card deck.
    startCustomDeck(suits, ranks, addJokers = true){
        this._cards = CardsDeckFactory.createCustomDeck(suits, ranks, addJokers);
        this._cardsInitalState = this._cards.slice();
    }

    //function to shuffle the deck
    //numberOfShuffles defines how many times de array is shuffle.
    //default 1.
    shuffle(numberOfShuffles = 1){
        let i, j, k;
        let temp;
        for (i = 0; i < numberOfShuffles; i++){
            for (j = 0; j < this._cards.length; j++) {
                k = Math.floor(Math.random() * this._cards.length);
                temp = this._cards[j];
                this._cards[j] = this._cards[k];
                this._cards[k] = temp;
            }
        }
    }

    //function to obtain numberOfCards cards
    //from the top of the cards deck.
    //numberOfCards is the number of cards that the user wants
    //to obtain from the cards deck.
    getCardsFromTheTop(numberOfCards){
        try{
            let cardsToReturn = [];
            if(numberOfCards <= this._cards.length){
                cardsToReturn = this._cards.splice(0, numberOfCards);
            }
            else{
                throw new DeckException("getCardsFromTheTop", `${numberOfCards} is greater than the length of the cards array`);
            }
            return cardsToReturn;
        }
        catch(exception){
            console.error(exception.toString());
        }
    }

    //function to obtain numberOfCards cards
    //from the bottom of the cards deck.
    //numberOfCards is the number of cards that the user wants
    //to obtain from the cards deck.
    getCardsFromTheBottom(numberOfCards){
        try{
            let cardsToReturn = [];
            if(numberOfCards <= this._cards.length){
                let positionToGetCardsFrom = (this._cards.length - numberOfCards);
                cardsToReturn = this._cards.splice(positionToGetCardsFrom, numberOfCards);
            }
            else{
                throw new DeckException("getCardsFromBottom", `${numberOfCards} is greater than the length of the cards array`);
            }
            return cardsToReturn;
        }
        catch(exception){
            console.error(exception.toString());
        }
    }

    //function that return the amount of cards left in the deck
    remainingCards(){
        return this._cards.length;
    }

    //function to restore cards to the initial state
    resetCardDeck(){
        this._cards = this._cardsInitalState.slice();
    }
}
