var Card = require('./card');

const privateFunctions = {
  _createDeck(suits, ranks, addJokers){
    var cards = [];
    suits.forEach(suit => {
      ranks.forEach(rank => {
        cards.push(new Card(suit, rank));
      })
    })
    if(addJokers){
      cards.push(new Card("joker", "joker"));
      cards.push(new Card("joker", "joker"));
    }
    return cards;
  }
}

module.exports = class CardDeckFactory{
  static createFrenchSuitDeck(addJokers = true){
    let suits = [ "hearts", "diams", "clubs", "spades" ];
    let ranks = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A" ];
  	return privateFunctions._createDeck(suits, ranks, addJokers);
  }

  static createSpanishDeck(addJokers = true){
    let suits = [ "cups", "swords", "coins", "clubs" ];
    let ranks = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  	return privateFunctions._createDeck(suits, ranks, addJokers);
  }

  static createCustomDeck(suits, ranks, addJokers = true){
    return privateFunctions._createDeck(suits, ranks, addJokers);
  }
}
