// variables (now outside)
var fileName = "../assets/usa.txt";
var winnerWinner = false;
var word = "";
var revealedString = "";
var incorrectTries = 0;
var chosenLetters = new Array(26).fill(false);

module.exports = {
  // starts the game on command
  startGame(message) {
    // picks a random word for the player to use of 61334 options
    var file = new File(fileName);
    file.open("r");
    var temporaryString = "";
    for (var i = 0; i < Math.floor(Math.random() * 61333); i++) {
      if (!file.eof) {
        temporaryString = file.readln();
      }
    }
    word = temporaryString;
    // create revealedString with dashes because the word hasn't been discovered yet
    for (var j = 0; j < word.length; j++) {
      revealedString = revealedString + "-";
    }
    winnerWinner = false;
  },
  // called when a letter is guessed changes the array value 0-25 to true so they can't guess it again
  // if they guess a letter that isn't in it, add one to incorrectTries
  // if they guess a letter that's in it, print out the string with the added letters and dashes
  guess(letter) {
    if (!winnerWinner) {
      // check if it's been guessed already
      var newLetter = letter.toLowerCase().trim().substring(14, 15);
      // ascii lowercase a starts at 97, so it should be (asciinumber - 97)
      var indexOfArrayOfLetters = newLetter.charCodeAt(0) - 96;
      if (!choseLetters[indexOfArrayOfLetters]) {
        // they haven't guessed the letter, so check for it
        chosenLetters[indexOfArrayOfLetters] = true;
        if(word.includes(newLetter)) {
          // it has the letter, so reveal it woohoo
          for (var q = 0; q < word.length; q++) {
            if (word.charAt(q) == newLetter.charAt(0)) {
              // the char is at the index q, so the letter should be put in the index q on the revealedString
              revealedString = replaceAt(revealedString, q, newLetter);
            }
          }
          letter.reply("Nice job! You got one: the string is now " + revealedString);
          if (!revealedString.includes("-")) {
            letter.reply("You won!");
            winnerWinner = true;
          }
        }
        else {
          // tell them it wasn't there
          letter.reply("Sorry, but that letter wasn't in the string.");
          incorrectTries++;
          if (incorrectTries >= 7) {
            letter.reply("You ran out of tries, sorry. The correct answer was " + word);
            winnerWinner = true;
          }
        }
      }
      else {
        // they've guessed the letter, mock them
        letter.reply("You've already guessed that letter!");
        letter.reply("Here's what you've got so far: " + revealedString);
      }
    }
    else {
      letter.reply("You already finished, silly!");
    }
  },
  // allows user to see how far they are along on the word and how many tries they have left
  checkProgress(checker) {
    checker.reply("Here's how we're doing so far...\nCurrent progress on word: " + revealedString + "\nIncorrect guesses: " + incorrectTries + "/7");
  },
  // method to replace characters (mostly for revealing)
  replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
  }
}
