module.exports = {
  handleFlip(msg){
    var randomNumber = Math.floor(Math.random()*2)
    if (randomNumber == 0){
      msg.reply("Heads")
    }
    else{
      msg.reply("Tails")
    }
  }
}
