module.exports = {
    handleHelp(msg) {
        msg.reply(`\`\`\`
List of available Commands:
+help - displays this message
---------------------------------
+8ball - don't ask if you don't want to know
+coinFlip - flips a coin
+convert x[unit1] to [unit2] - converts x in unit1 to unit2
+llamaFacts - random llama facts
+roll x - rolls an x sided dice
+startHangman - begins a game of hangman
+guessHangman <letter> - guesses a letter in a game of hangman
+hangmanProgress - sees stats of a hangman game
+startTicTacToe - begins a game of tic tac toe
+joinTicTacToe - joins a began game as the other player
+placeTicTacToe [number from 1 to 9] - places on the space that is specified by the player in the game of tic tac toe
\`\`\``);
    }
}
