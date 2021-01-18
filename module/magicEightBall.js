module.exports = {
  handlePing(msg) {
    var randomNumber = Math.floor(Math.random() * 8);
    console.log(randomNumber);
    if (randomNumber == 0) {
      msg.reply("Obviously.");
    }
    else if (randomNumber == 1) {
      msg.reply("This has got to be true.");
    }
    else if (randomNumber == 2) {
      msg.reply("When pigs fly!");
    }
    else if (randomNumber == 3) {
      msg.reply("When Max refrains from being edgy, this shall be true.");
    }
    else if (randomNumber == 4) {
      msg.reply("It is certain.");
    }
    else if (randomNumber == 5) {
      msg.reply("No, clearly not.");
    }
    else if (randomNumber == 6) {
      msg.reply("Why are you asking me? The answer is crystal clear.");
    }
    else if (randomNumber == 7) {
      msg.reply("Perhaps you should consult an online search engine.");
    }
    else if (randomNumber == 8) {
      msg.reply("stop asking me these things im not here for this");
    }
    else {
      msg.reply("Possibly.");
    }
  }
}
