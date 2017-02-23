module.exports = class Card {
  constructor(suit, rank){
    this._suit = suit;
    this._rank = rank;
  }

  get suit() { return this._suit };
  get rank() { return this._rank };

  toString(){
    return `${this._rank} ${this._suit}`
  }
}
