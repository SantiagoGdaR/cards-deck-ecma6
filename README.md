# cards-deck-ecma6
This project is a cards deck implemented in ecmaScript 6 that provides the following API:

```javascript
//initilization of the module
var cardsDeck = new CardDeck();

//function to create a french suit deck
//addJokers is a boolean "true" if the jokers should be added to the cards deck.
//default true.
cardsDeck.startFrenchSuitDeck(addJokers);

//function to create a spanish deck
//addJokers is a boolean "true" if the jokers should be added to the cards deck.
//default true.
cardsDeck.startSpanishDeck(addJokers);

//function to create a custom deck
//suits is an array representing the custom suits for the cards deck.
//ranks is an array representing the custom ranks for the cards deck.
//addJokers is a boolean "true" if the jokers should be added to the cards deck.
//default true.
cardsDeck.startCustomDeck(suits, ranks, addJokers);

//function to shuffle the deck
//numberOfShuffles defines how many times de array is shuffle.
//default 1.
cardsDeck.shuffle(numberOfShuffles);

//function to obtain numberOfCards cards
//from the top of the cards deck.
//numberOfCards is the number of cards that the user wants
//to obtain from the cards deck.
//if numberOfCards <= cards.length a custom exception is handle an logged into the console.
cardsDeck.getCardsFromTheTop(numberOfCards);

//function to obtain numberOfCards cards
//from the bottom of the cards deck.
//numberOfCards is the number of cards that the user wants
//to obtain from the cards deck.
//if numberOfCards <= cards.length a custom exception is handle an logged into the console.
cardsDeck.getCardsFromTheBottom(numberOfCards);

//function that return the amount of cards left in the deck.
cardsDeck.remainingCards();

//function to restore cards to the initial state.
cardsDeck.resetCardDeck();

```

## Make it run

1 - You must have installed NodeJS.

2 - Clone the repository and run the command "npm install" from the root folder.

3 - Run the command "webpack" to generate the build files.

3 - To see if the project is working properly run the unit testing with the command "npm run tests".

4 - If you want a distribution version file of the project run the command "webpack -p" for a  minified version
or only the command "webpack" if you don't want a minified version.
If no errors you should find the distribution version on the folder ./build.

** If the command webpack is not working you need to install "webpack-cli" from npm.

### Run the demo/example project

In the example project you are going to find examples of the usage of the cardsDeck Api.
In order to run the demo project you must:
1 - Run the command "webpack --config example/webpack-example.config.js" to generate the build files.
2 - Run the command "npm run example" from the root folder to start the example.


## Project devDependencies

```javascript
"babel-core": "^6.22.1",
"babel-loader": "^6.2.10",
"babel-preset-es2015": "^6.22.0",
"jasmine": "^2.5.3",
"jasmine-core": "^2.5.2",
"karma": "^1.5.0",
"karma-chrome-launcher": "^2.0.0",
"karma-jasmine": "^1.1.0",
"karma-mocha-reporter": "^2.2.2",
"karma-webpack": "^2.0.2",
"webpack": "^2.2.1",
"webpack-dev-server": "^2.3.0"
```
Dependencies "Why?..." one by one:

**babel** - We need babel so we can write code in ecmaScript 6 and transpile it to ecma 5 using webpack.
**webpack** - We need webpack since we are using it to configure and generate the builds.
**webpack-dev-server** - We use the webpack-dev-server to test the application and run the example project.
**jasmine** - We use jasmine to create the unit testing code.
**karma** - We use karma to run the unit testing. We also use the mocha reporter to generate a better report
of unit testing the result. We use the chrome launcher to automatically run chrome to run the unit testing.
