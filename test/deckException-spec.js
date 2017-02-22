var DeckException = require('../js/deckException');

describe('Deck Exception', () => {
  it('instantiation tested through toString result', () => {
    var deckException = new DeckException('Spec instantiation', "Custom message");
    var toString = deckException.toString();
    expect(toString).toContain('Error: exception in cardsDeck API');
    expect(toString).toContain('Spec instantiation');
    expect(toString).toContain('Custom message');
  });
});
