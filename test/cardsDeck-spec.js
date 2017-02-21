var CardsDeck = require ('../js/cardsDeck');

describe('French Suit Cards Deck', () => {
  let cardsDeck;
  beforeEach(function() {
    cardsDeck = new CardsDeck();
  });
  it('test french suit deck creation with jokers', () => {
    let frenchSuiteCardsDeck = cardsDeck.startFrenchSuitDeck();
    let cardDeckLength = frenchSuiteCardsDeck.length;
    expect(cardDeckLength).toBe(54);
  });
  it('test french suit deck creation without jokers', () => {
    let frenchSuiteCardsDeck = cardsDeck.startFrenchSuitDeck(false);
    let cardDeckLength = frenchSuiteCardsDeck.length;
    expect(cardDeckLength).toBe(52);
  });
  it('random card that should be in the deck', () => {
    let frenchSuiteCardsDeck = cardsDeck.startFrenchSuitDeck();
    let finded = frenchSuiteCardsDeck.find(card => card.toString() === 'A diams');
    expect(finded).not.toBeUndefined();
  });
});

describe('Spanish Cards Deck', () => {
  let cardsDeck;
  beforeEach(function() {
    cardsDeck = new CardsDeck();
  });
  it('test spanish deck creation with jokers', () => {
    let spanishCardsDeck = cardsDeck.startSpanishDeck();
    let cardDeckLength = spanishCardsDeck.length;
    expect(cardDeckLength).toBe(50);
  });
  it('test spanish deck creation without jokers', () => {
    let spanishCardsDeck = cardsDeck.startSpanishDeck(false);
    let cardDeckLength = spanishCardsDeck.length;
    expect(cardDeckLength).toBe(48);
  });
  it('random card that should be in the deck', () => {
    let spanishCardsDeck = cardsDeck.startSpanishDeck();
    let finded = spanishCardsDeck.find(card => card.toString() === '12 clubs');
    expect(finded).not.toBeUndefined();
  });
});

describe('Custom Cards Deck', () => {
  let cardsDeck;
  let suits;
  let ranks;
  beforeEach(function() {
    cardsDeck = new CardsDeck();
    suits = ["tree", "house"];
    ranks = [1, 2];
  });
  it('test custom deck creation with jokers', () => {
    let customCardsDeck = cardsDeck.startCustomDeck(suits, ranks);
    let cardDeckLength = customCardsDeck.length;
    expect(cardDeckLength).toBe(6);
  });
  it('test custom deck creation without jokers', () => {
    let customCardsDeck = cardsDeck.startCustomDeck(suits, ranks, false);
    let cardDeckLength = customCardsDeck.length;
    expect(cardDeckLength).toBe(4);
  });
  it('random card that should be in the deck', () => {
    let customCardsDeck = cardsDeck.startCustomDeck(suits, ranks);
    let finded = customCardsDeck.find(card => card.toString() === '1 tree');
    expect(finded).not.toBeUndefined();
  });
});
