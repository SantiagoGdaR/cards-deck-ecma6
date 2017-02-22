var CardsDeckFactory = require('../js/cardsDeckFactory');

describe('Cards Deck Factory', () => {
  it('test french suits deck creation with jokers', () => {
    var cardsDeck = CardsDeckFactory.createFrenchSuitDeck();
    let cardDeckLength = cardsDeck.length;
    expect(cardDeckLength).toBe(54);
  });
  it('test  french suits deck creation without jokers', () => {
    var cardsDeck = CardsDeckFactory.createFrenchSuitDeck(false);
    let cardDeckLength = cardsDeck.length;
    expect(cardDeckLength).toBe(52);
  });
  it('test spanish deck creation with jokers', () => {
    var cardsDeck = CardsDeckFactory.createSpanishDeck();
    let cardDeckLength = cardsDeck.length;
    expect(cardDeckLength).toBe(50);
  });
  it('test spanish deck creation without jokers', () => {
    var cardsDeck  = CardsDeckFactory.createSpanishDeck(false);
    let cardDeckLength = cardsDeck.length;
    expect(cardDeckLength).toBe(48);
  });
  it('test custom deck creation with jokers', () => {
    let suits = ["tree", "house"];
    let ranks = [1, 2, 3];
    var cardsDeck = CardsDeckFactory.createCustomDeck(suits, ranks);
    let cardDeckLength = cardsDeck.length;
    expect(cardDeckLength).toBe(8);
  });
  it('test custom deck creation without jokers', () => {
    let suits = ["tree", "house"];
    let ranks = [1, 2, 3];
    var cardsDeck = CardsDeckFactory.createCustomDeck(suits, ranks, false);
    let cardDeckLength = cardsDeck.length;
    expect(cardDeckLength).toBe(6);
  });
});
