var DeckFactory = require('./deckFactory');

module.exports = class CardsDeck{
    constructor(){
        this._cards = [];
    }

    get cards(){ return this._cards };

    //function to create a suit deck
    startFrenchSuitDeck(){
        this._cards = DeckFactory.createFrenchSuitDeck();
        return this._cards;
    }

    //function to create a spanish deck
    startSpanishDeck(){
        this._cards = DeckFactory.createSpanishDeck();
        return this._cards;
    }

    //function to shuffle the deck
    //numberOfShuffles defines how many times de array is shuffle
    //default 1
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

    getCardsFromTheBottom(numberOfCards){
        try{
            let cardsToReturn = [];
            let cards = this._cards;
            if(numberOfCards <= this._cards.length){
                cardsToReturn = this._cards.filter(card, index => {
                    if(numberOfCards <= (index +1)){
                        cards.splice(0, 1);
                        return card;
                    }
                });
            }
            else{
                throw new DeckException("getCardsFromBottom", `${numberOfCards} is greater than the length of the cards array`);
            }
            this._cards = cards;
            return cardsToReturn;
        }
        catch(exception){
            console.error(exception.toString());
        }
    }

    getCardsFromTop(numberOfCards){
        try{
            let cardsToReturn = [];
            let cards = this._cards;
            if(numberOfCards <= this._cards.length){
                cardsToReturn = this._cards.filter(card, index => {
                    if(numberOfCards <= (index +1)){
                        cards.splice((cards.length - 2), (cards.length -1));
                        return card;
                    }
                });
            }
            else{
                throw new DeckException("getCardsFromTop", `${numberOfCards} is greater than the length of the cards array`);
            }
            this._cards = cards;
            return cardsToReturn;
        }
        catch(exception){
            console.error(exception.toString());
        }
    }
}
