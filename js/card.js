module.exports = class User {
  constructor(suit, number){
    this._suit = suit;
    this._number = number;
  }

  get suit() { return this._suit };
  get number() { return this._number };

  toString(){
    return `${this._number} ${this._suit}`
  }
}
