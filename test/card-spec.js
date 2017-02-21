var Card = require ('../js/card');

describe('Card', () => {
  it('create a card', () => {
    let card = new Card('clubs', '1');
    let toString = card.toString();
    expect(toString).toBe('1 clubs');
  });
});
