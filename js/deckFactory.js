let Card = require('./card');

module.exports = class DeckFactory{
  static createFrenchSuitDeck(addJokers = true){
    let suits = [ "hearts", "diams", "clubs", "spades" ];
    let ranks = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A" ];
  	return _createDeck(suits, ranks, addJokers);
  }

  static createSpanishDeck(addJokers = true){
    let suits = [ "cups", "swords", "golds", "clubs" ];
    let ranks = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  	return _createDeck(suits, ranks, addJokers);
  }

  static createCustomDeck(suits, ranks, addJokers = true){
    return _createDeck(suits, ranks, addJokers);
  }

  _createDeck(suits, ranks, addJokers){
    var cards = [];
    for( var s = 0; s < suits.length; s++ ) {
        for( var n = 0; n < names.length; n++ ) {
            cards.push(new Card(ranks[n], suits[s]));
        }
    }
    if(addJokers){
      cards.push(new Card("joker", "joker"));
      cards.push(new Card("joker", "joker"));
    }
    return cards;
  }
}
