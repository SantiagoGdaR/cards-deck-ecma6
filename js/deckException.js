module.exports = class DeckException{
  constructor(functionName, message){
    this._functionName = functionName;
    this._message = message;
  }
  toString(){
    return `Error: exception in cardsDeck API. Function: ${this._functionName}. Message: ${this._message}`
  }
}
