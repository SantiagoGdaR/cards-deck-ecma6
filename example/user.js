module.exports = class User {
  constructor(name){
    this._name = name;
  }
  get name(){ return this._name };
  get cards(){ return this._cards };
  set cards(cards){ this._cards = cards };

  toString(){
    let cards = '';
    this._cards.forEach(card  => {
      cards += `[${card.toString()}] `;
    });
    return `Name: ${this._name}
    Cards: ${cards}`;
  }
}
