var Card = require ('../js/card');

describe('Card', () => {
  it('instantiation tested through toString result', () => {
    let card = new Card('clubs', '1');
    let toString = card.toString();
    expect(toString).toBe('1 clubs');
  });
});
