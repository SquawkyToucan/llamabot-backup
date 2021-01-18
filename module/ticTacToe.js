// Tic Tac Toe
// by Eli Browne
// This file contains the code that plays the tic tac toe game

// Keeps track of the next game that needs to have players added to it
var indexOfJoiningGame = 0
// Keeps track of the index that a new game would be added to
var indexOfGame = 0
var gamesArray = []; // adds array of (x, o, turn, board) when a new game is created

// Idea: Have an array that stores games. When a new game is created, a new spot on the array is created. When the user enters
// in their move, it will search through each game to find games in which they are players and it is their turn. If there are
// multiple, it shows all of the opponents and asks which one they want to make the move in.

module.exports = {
  startGame(message) {
    // message is just the message that they give, author is the one who gives it
    // array of games [index of current game being created] = [playerX (message author), playerO, isXTurn, board]
    gamesArray[indexOfGame] = [message.author, null, true, new Array(9).fill("-")]
    // Announces a new game to the server
    message.reply("Hello, server! " + message.author + " has created a game of tic tac toe. Respond with +ttt join if you would like to play against them!");
    // indexOfGame is used to determine what the placement of new games should be, and because this index has been completed, it should be updated to match the next possible game
    indexOfGame = indexOfGame + 1;
  },
  joinGame(message) {
    if (gamesArray[indexOfJoiningGame] != null) {
      // message.author is used to find out the player and set them as O
      // array of games [ index of the first game that needs a second player ] [ position of player O] = player's username
      gamesArray[indexOfJoiningGame][1] = message.author;
      // Explicar todo que es necessario para los jugadores
      message.reply(message.author + " has joined the game as O, and they'll play against " + gamesArray[indexOfJoiningGame][0] + ", who will be X.");
      message.reply("Here are the rules of the game:\n - X goes first, and the players alternate\n - To make a move, type +ttt [the space]\n - The spaces work like this:\n\n1  2  3\n4  5  6\n7  8  9\n\nHave fun!");
      message.reply("You should only play in one game at once. Playing in multiple can result in the games getting mixed up and unintended moves happening.")
      // Increment indexOfJoiningGame
      indexOfJoiningGame = indexOfJoiningGame + 1
    }
    else {
      // There's no open game for them to join, politely inform them of such information
      message.reply("Sorry, but there aren't any open games for you to join right now. You could create one with '+ttt start' if you'd like.");
    }
  },
  acceptMove(message) {
    // Loop through all of the games to see if it's their turn in any of them
    // Game of action variable can be used after the game containing them is found
    var gameOfAction;
    var wasAValidMove = false;
    for (var i = 0; i < gamesArray.length; i++) {
      // first, check to make sure that it is the turn of the correct player
      // if (gamesArray[i][isXTurn] and author == gamesArray[i][playerX] or Os)
      if (gamesArray[i] != null) {
        if ((gamesArray[i][2] && message.author == gamesArray[i][0]) || (!gamesArray[i][2] && message.author == gamesArray[i][1])) {
          // the player matches the turn, so they can proceed and have their move registered
          // this is the game that will be used in future code
          gameOfAction = i;
          // first, find out the space that they're going for
          try {
            var spaceGoingFor = parseInt(message.content.substring(5), 10) - 1;
            if (spaceGoingFor > 8 || spaceGoingFor < 0) {
              message.reply("Please enter in a valid square.")
              return;
            }
          } catch (error) {
            message.reply("That wasn't valid input! Please try again with a real number in numeric form.")
            return;
          }
          // check if it's occupied
          // finds the board of the game i in the array and what space they're going for
          if (gamesArray[i][3][spaceGoingFor] == "-") {
             // proceed, the space was empty
             if (message.author == gamesArray[i][0]) {
               // put an X on the place where they want to go
               gamesArray[i][3][spaceGoingFor] = "X";
               // It's the other player's turn in the game, so tell them
               gamesArray[i][2] = false;
             }
             else  {
               // put an O on the place where they want to go, give the turn to X
               gamesArray[i][3][spaceGoingFor] = "O";
               gamesArray[i][2] = true;
             }
             gameOfAction = i;
             wasAValidMove = true;
          }
          else {
            // the square is occupied
            message.reply("This square is occupied, and you can't make a move there. Sorry!");
          }
          // Tell both players what the board looks like
          message.reply("As of now, the board looks like this:\n" + gamesArray[i][3][0] + "  " + gamesArray[i][3][1] + "  " + gamesArray[i][3][2] + "\n"+ gamesArray[i][3][3] + "  " + gamesArray[i][3][4] + "  " + gamesArray[i][3][5] + "\n"+ gamesArray[i][3][6] + "  " + gamesArray[i][3][7] + "  " + gamesArray[i][3][8]);
        }
        // Here is the else loop that we're silencing because it would be really annoying if they were the eighth game and had to get seven of these notificiations, maybe bundle it in with one at the end
        /*else {
          // tell them it isn't their turn
          message.reply("Patience is not simply the ability to wait - it's how we behave while we're waiting.\nJoyce Meyer\n\nIt's not your turn! Please wait until the opponent has made a move before trying to make your own.");
        }*/
      }
    }
    // The loop is done
    // check for winner or tie, and finish the game if that's been done
    // first, check to see if all are filled and none are "-", then check if there's a win
    if (wasAValidMove) {
      var boardIsFull = true;
      for (var i = 0; i < 9; i++) {
        // Error: cannot read property "3" of undefined therefore gameOfAction isn't working
        if (gamesArray[gameOfAction][3][i] == "-") {
          boardIsFull = false;
        }
      }
      if(boardIsFull) {
        // the board is full, check if there's a winner and then tell them that there's been a tie if there isn't a winner
        // just hardcoding win solutions:
        if ((gamesArray[gameOfAction][3][0] == gamesArray[gameOfAction][3][1] && gamesArray[gameOfAction][3][1] == gamesArray[gameOfAction][3][2]) || (gamesArray[gameOfAction][3][3] == gamesArray[gameOfAction][3][4] && gamesArray[gameOfAction][3][4] == gamesArray[gameOfAction][3][5]) || (gamesArray[gameOfAction][3][6] == gamesArray[gameOfAction][3][7] && gamesArray[gameOfAction][3][7] == gamesArray[gameOfAction][3][8]) || (gamesArray[gameOfAction][3][0] == gamesArray[gameOfAction][3][3] && gamesArray[gameOfAction][3][3] == gamesArray[gameOfAction][3][6]) || (gamesArray[gameOfAction][3][1] == gamesArray[gameOfAction][3][4] && gamesArray[gameOfAction][3][4] == gamesArray[gameOfAction][3][7]) || (gamesArray[gameOfAction][3][2] == gamesArray[gameOfAction][3][5] && gamesArray[gameOfAction][3][5] == gamesArray[gameOfAction][3][8]) || (gamesArray[gameOfAction][3][0] == gamesArray[gameOfAction][3][4] && gamesArray[gameOfAction][3][4] == gamesArray[gameOfAction][3][8]) || (gamesArray[gameOfAction][3][2] == gamesArray[gameOfAction][3][4] && gamesArray[gameOfAction][3][4] == gamesArray[gameOfAction][3][6])) {
          if (gamesArray[gameOfAction][2]) {
            // O made the last move, and if there's a win, it should go to them because it wasn't caught during X's turn
            message.reply("O wins! Congratulations!");
          }
          else {
            // X made the last move, and if there's a win, it should go to X because the win wasn't caught after O's move
            message.reply("X wins! Congratulations!");
          }
        }
        else {
          // no winner, it's a tie
          message.reply("It was a tie! Nicely played!");
        }
        gamesArray[gameOfAction] = null;
      }
      else {
        // the board isn't full, just check for a winner
        if ((gamesArray[gameOfAction][3][0] == gamesArray[gameOfAction][3][1] && gamesArray[gameOfAction][3][1] == gamesArray[gameOfAction][3][2] && gamesArray[gameOfAction][3][1] != "-") || (gamesArray[gameOfAction][3][3] == gamesArray[gameOfAction][3][4] && gamesArray[gameOfAction][3][4] == gamesArray[gameOfAction][3][5] && gamesArray[gameOfAction][3][4] != "-") || (gamesArray[gameOfAction][3][6] == gamesArray[gameOfAction][3][7] && gamesArray[gameOfAction][3][7] == gamesArray[gameOfAction][3][8] && gamesArray[gameOfAction][3][7] != "-") || (gamesArray[gameOfAction][3][0] == gamesArray[gameOfAction][3][3] && gamesArray[gameOfAction][3][3] == gamesArray[gameOfAction][3][6] && gamesArray[gameOfAction][3][3] != "-") || (gamesArray[gameOfAction][3][1] == gamesArray[gameOfAction][3][4] && gamesArray[gameOfAction][3][4] == gamesArray[gameOfAction][3][7] && gamesArray[gameOfAction][3][4] != "-") || (gamesArray[gameOfAction][3][2] == gamesArray[gameOfAction][3][5] && gamesArray[gameOfAction][3][5] == gamesArray[gameOfAction][3][8] && gamesArray[gameOfAction][3][5] != "-") || (gamesArray[gameOfAction][3][0] == gamesArray[gameOfAction][3][4] && gamesArray[gameOfAction][3][4] == gamesArray[gameOfAction][3][8] && gamesArray[gameOfAction][3][4] != "-") || (gamesArray[gameOfAction][3][2] == gamesArray[gameOfAction][3][4] && gamesArray[gameOfAction][3][4] == gamesArray[gameOfAction][3][6]) && gamesArray[gameOfAction][3][4] != "-") {
          if (gamesArray[gameOfAction][2]) {
            // O made the last move, and if there's a win, it should go to them because it wasn't caught during X's turn
            message.reply("O wins! Congratulations!");
          }
          else {
            // X made the last move, and if there's a win, it should go to X because the win wasn't caught after O's move
            message.reply("X wins! Congratulations!");
          }
          gamesArray[gameOfAction] = null;
        }
      }
  }
  }
}
