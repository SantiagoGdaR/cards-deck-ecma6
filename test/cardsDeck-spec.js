var CardsDeck = require ('../js/cardsDeck');

describe('French Suit Cards Deck', () => {
  let cardsDeck;
  beforeEach(function() {
    cardsDeck = new CardsDeck();
  });
  it('test french suit deck creation with jokers', () => {
    cardsDeck.startFrenchSuitDeck();
    let cardDeckLength = cardsDeck.cards.length;
    expect(cardDeckLength).toBe(54);
  });
  it('test french suit deck creation without jokers', () => {
    cardsDeck.startFrenchSuitDeck(false);
    let cardDeckLength = cardsDeck.cards.length;
    expect(cardDeckLength).toBe(52);
  });
  it('random card that should be in the deck', () => {
    cardsDeck.startFrenchSuitDeck();
    let finded = cardsDeck.cards.find(card => card.toString() === 'A diams');
    expect(finded).not.toBeUndefined();
  });
});

describe('Spanish Cards Deck', () => {
  let cardsDeck;
  beforeEach(function() {
    cardsDeck = new CardsDeck();
  });
  it('test spanish deck creation with jokers', () => {
    cardsDeck.startSpanishDeck();
    let cardDeckLength = cardsDeck.cards.length;
    expect(cardDeckLength).toBe(50);
  });
  it('test spanish deck creation without jokers', () => {
    cardsDeck.startSpanishDeck(false);
    let cardDeckLength = cardsDeck.cards.length;
    expect(cardDeckLength).toBe(48);
  });
  it('random card that should be in the deck', () => {
    cardsDeck.startSpanishDeck();
    let finded = cardsDeck.cards.find(card => card.toString() === '12 clubs');
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
    cardsDeck.startCustomDeck(suits, ranks);
    let cardDeckLength = cardsDeck.cards.length;
    expect(cardDeckLength).toBe(6);
  });
  it('test custom deck creation without jokers', () => {
    cardsDeck.startCustomDeck(suits, ranks, false);
    let cardDeckLength = cardsDeck.cards.length;
    expect(cardDeckLength).toBe(4);
  });
  it('random card that should be in the deck', () => {
    cardsDeck.startCustomDeck(suits, ranks);
    let finded = cardsDeck.cards.find(card => card.toString() === '1 tree');
    expect(finded).not.toBeUndefined();
  });
});

describe('Cards Deck Shuffle', () => {
  it('test that random cards position changed', () => {
    let cardsDeck = new CardsDeck();
    cardsDeck.startFrenchSuitDeck();
    let card0 = cardsDeck.cards[0];
    let card1 = cardsDeck.cards[1];
    let card2 = cardsDeck.cards[2];
    cardsDeck.shuffle(2);
    let card0AfterShuffle = cardsDeck.cards[0];
    let card1AfterShuffle  = cardsDeck.cards[1];
    let card2AfterShuffle  = cardsDeck.cards[2];

    let stringBeforeShuffle = `${card0.toString()} ${card1.toString()} ${card2.toString()}`;
    let stringAfterShuffle = `${card0AfterShuffle.toString()} ${card1AfterShuffle.toString()} ${card2AfterShuffle.toString()}`;

    expect(stringBeforeShuffle).not.toBe(stringAfterShuffle);
  });
});

describe('Cards Deck Get Cards From The Top', () => {
  let cardsDeck;
  beforeEach(function() {
    cardsDeck = new CardsDeck();
    cardsDeck.startFrenchSuitDeck();
  });
  it('test that obtained cards are actually the cards from the top', () => {
    let card0 = cardsDeck.cards[0];
    let card1 = cardsDeck.cards[1];
    let card2 = cardsDeck.cards[2];
    let cardsFromTheTop = cardsDeck.getCardsFromTheTop(3);

    expect(card0.toString()).toBe(cardsFromTheTop[0].toString());
    expect(card1.toString()).toBe(cardsFromTheTop[1].toString());
    expect(card2.toString()).toBe(cardsFromTheTop[2].toString());
  });
  it('test that requested cards are as much as the ones obtained', () => {
    let card0 = cardsDeck.cards[0];
    let card1 = cardsDeck.cards[1];
    let card2 = cardsDeck.cards[2];
    let cardsFromTheTop = cardsDeck.getCardsFromTheTop(3);

    expect(cardsFromTheTop.length).toBe(3);
  });
});

describe('Cards Deck Get Cards From The Bottom', () => {
  let cardsDeck;
  beforeEach(function() {
    cardsDeck = new CardsDeck();
    cardsDeck.startFrenchSuitDeck();
  });
  it('test that obtained cards are actually the cards from the bottom', () => {
    let card0 = cardsDeck.cards[cardsDeck.cards.length - 3];
    let card1 = cardsDeck.cards[cardsDeck.cards.length - 2];
    let card2 = cardsDeck.cards[cardsDeck.cards.length - 1];
    let cardsFromTheBottom = cardsDeck.getCardsFromTheBottom(3);

    expect(card0.toString()).toBe(cardsFromTheBottom[0].toString());
    expect(card1.toString()).toBe(cardsFromTheBottom[1].toString());
    expect(card2.toString()).toBe(cardsFromTheBottom[2].toString());
  });
  it('test that requested cards are as much as the ones obtained', () => {
    let card0 = cardsDeck.cards[0];
    let card1 = cardsDeck.cards[1];
    let card2 = cardsDeck.cards[2];
    let cardsFromTheTop = cardsDeck.getCardsFromTheBottom(3);

    expect(cardsFromTheTop.length).toBe(3);
  });
});

describe('Cards Deck Remaining Cards', () => {
  let cardsDeck;
  beforeEach(function() {
    cardsDeck = new CardsDeck();
    cardsDeck.startFrenchSuitDeck();
  });
  it('test that the remaining cards length is the expected getting from the top', () => {
    let cardsFromTheBottom = cardsDeck.getCardsFromTheTop(2);
    let remainingCards = cardsDeck.remainingCards();
    expect(remainingCards).toBe(52);
  });
  it('test that the remaining cards length is the expected getting from the bottom', () => {
    let cardsFromTheBottom = cardsDeck.getCardsFromTheBottom(2);
    let remainingCards = cardsDeck.remainingCards();
    expect(remainingCards).toBe(52);
  });
});
describe('Cards Deck Reset', () => {
  it('test reset deck after removing cards', () => {
    let cardsDeck = new CardsDeck();
    cardsDeck.startFrenchSuitDeck();
    cardsDeck.getCardsFromTheBottom(3);
    cardsDeck.resetCardsDeck();
    expect(cardsDeck.cards.length).toBe(54);
  });
});
