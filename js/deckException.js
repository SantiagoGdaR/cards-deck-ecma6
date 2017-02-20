module.exports = DeckException{
  constructor(functionName, message){
    this._functionName = functionName;
    this._ message = message;
  }
  toString(){
    `Error: exception in Deck API
    Function: ${this._function}
    Message: ${this._message}`
  }

}
