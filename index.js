
//comments here
const Discord = require('discord.js');
const client = new Discord.Client();
const Constant = require('./config/constants.js');

//for debug purposes do not modify
const whoami = () => {
    if (process.argv.length != 3) {
        return "default";
    }
    else {
        return process.argv[2];
    }
}

//modules - alphabetical order please

//TODO: please fix this module!
// const   ARVerbConjugations = require('./module/arverb.js');
const       AsciiArtModule = require('./module/asciiArt.js');
const       CoinFlipModule = require('./module/coinFlip.js');
const     ConnectionModule = require('./module/connection.js');
const       DicerollModule = require('./module/diceroll.js');
const        HangmanModule = require('./module/hangman.js');
const           HelpModule = require('./module/help.js');
const LanguageTriviaModule = require('./module/languageTriviaGame.js');
const           LlamaFacts = require('./module/llamaFacts.js');
const MagicEightBallModule = require('./module/magicEightBall.js');
const           PingModule = require('./module/ping.js');
const          ShibeModule = require('./module/ShowRandomShibeImg.js');
const      TicTacToeModule = require('./module/ticTacToe.js');
const  UnitConverterModule = require('./module/unitconverter.js');
//const     wikiSearchModule = require('./module/ping.js');


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.channels.filter(channel => channel.name == 'bot').map(channel => channel.send('llamabot is online!'));
});

client.on('message', msg => {
    if (msg.channel.name == Constant[whoami()].channel) {
        if (msg.content.startsWith('+8ball')) {
            MagicEightBallModule.handlePing(msg);
        }
        else if (msg.content.startsWith('+coinFlip')) {
            CoinFlipModule.handleFlip(msg);
        }
        else if (msg.content.startsWith('+connect')) {
            CoinFlipModule.handleConnection(msg);
        }
        else if (msg.content.startsWith('+convert')) {
            UnitConverterModule.handleUnitConversion(msg);
        }
        else if (msg.content == '+help') {
            HelpModule.handleHelp(msg);
        }
        else if (msg.content.startsWith('+llamaFacts')){
            LlamaFacts.handleLlama(msg);
        }
        else if (msg.content == 'ping') {
            PingModule.handlePing(msg);
        }
        else if (msg.content.startsWith('+roll')) {
            DicerollModule.handleRoll(msg);
        }
        else if (msg.content.startsWith('+startHangman')) {
            HangmanModule.startGame(msg);
        }
        else if (msg.content.startsWith('+guessHangman')) {
            HangmanModule.guess(msg);
        }
        else if (msg.content.startsWith('+hangmanProgress')) {
          HangmanModule.checkProgress(msg);
        }
        else if (msg.content.startsWith('+asciiArt')) {
            AsciiArtModule.handleAsciiRequest(msg);
        }
        else if (msg.content.startsWith('+wiki')) {
            wikiSearchModule.handleWiki(msg);
        }
        else if(msg.content.startsWith('+ShibeImg')){
            ShibeModule.handleImg(msg);
        }
        else if (msg.content.startsWith('+ttt start')) {
            TicTacToeModule.startGame(msg);
        }
        else if (msg.content.startsWith('+ttt join')) {
            TicTacToeModule.joinGame(msg);
        }
        else if (msg.content.startsWith('+ttt')) {
            TicTacToeModule.acceptMove(msg);
        }
        else if (msg.content.startsWith('+ARVerbs')){
            ARVerbConjugations.handleARVerb(msg);
        }
        else if (msg.content.startsWith('+ltg start')) {
          LanguageTriviaModule.startGame(msg);
        }
        else if (msg.content.startsWith('+ltg help')) {
          LanguageTriviaModule.help(msg)
        }
        else if (msg.content.startsWith('+ltg')){
          LanguageTriviaModule.receiveAnswer(msg, Date.now());
        }
    }
});

client.login(Constant[whoami()].token);
