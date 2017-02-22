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

describe('Cards Deck Shuffle', () => {
  it('test that random cards position changed', () => {
    let cardsDeck = new CardsDeck();
    let frenchSuiteCardsDeck = cardsDeck.startFrenchSuitDeck();
    let card0 = frenchSuiteCardsDeck[0];
    let card1 = frenchSuiteCardsDeck[1];
    let card2 = frenchSuiteCardsDeck[2];
    cardsDeck.shuffle(2);
    let card0AfterShuffle = frenchSuiteCardsDeck[0];
    let card1AfterShuffle  = frenchSuiteCardsDeck[1];
    let card2AfterShuffle  = frenchSuiteCardsDeck[2];

    let stringBeforeShuffle = `${card0.toString()} ${card1.toString()} ${card2.toString()}`;
    let stringAfterShuffle = `${card0AfterShuffle.toString()} ${card1AfterShuffle.toString()} ${card2AfterShuffle.toString()}`;

    expect(stringBeforeShuffle).not.toBe(stringAfterShuffle);
  });
});

describe('Cards Deck Get Cards From The Top', () => {
  it('test that obtained cards are actually the cards from the top', () => {
    let cardsDeck = new CardsDeck();
    let frenchSuiteCardsDeck = cardsDeck.startFrenchSuitDeck();
    let card0 = frenchSuiteCardsDeck[0];
    let card1 = frenchSuiteCardsDeck[1];
    let card2 = frenchSuiteCardsDeck[2];
    let cardsFromTheTop = cardsDeck.getCardsFromTheTop(3);

    expect(card0.toString()).toBe(cardsFromTheTop[0].toString());
    expect(card1.toString()).toBe(cardsFromTheTop[1].toString());
    expect(card2.toString()).toBe(cardsFromTheTop[2].toString());
  });
});

describe('Cards Deck Get Cards From The Bottom', () => {
  it('test that obtained cards are actually the cards from the bottom', () => {
    let cardsDeck = new CardsDeck();
    let frenchSuiteCardsDeck = cardsDeck.startFrenchSuitDeck();
    let card0 = frenchSuiteCardsDeck[frenchSuiteCardsDeck.length - 3];
    let card1 = frenchSuiteCardsDeck[frenchSuiteCardsDeck.length - 2];
    let card2 = frenchSuiteCardsDeck[frenchSuiteCardsDeck.length - 1];
    let cardsFromTheBottom = cardsDeck.getCardsFromTheBottom(3);

    expect(card0.toString()).toBe(cardsFromTheBottom[0].toString());
    expect(card1.toString()).toBe(cardsFromTheBottom[1].toString());
    expect(card2.toString()).toBe(cardsFromTheBottom[2].toString());
  });
});

describe('Cards Deck Remaining Cards', () => {
  it('test that the remaining cards length is the expected', () => {
    let cardsDeck = new CardsDeck();
    let frenchSuiteCardsDeck = cardsDeck.startFrenchSuitDeck();
    let cardsFromTheBottom = cardsDeck.getCardsFromTheBottom(2);
    let remainingCards = cardsDeck.remainingCards();
    expect(remainingCards).toBe(52);
  });
});
