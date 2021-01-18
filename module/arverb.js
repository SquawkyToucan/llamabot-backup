const fs = require('fs')

module.exports = {


  handleARVerb(msg){
    if (msg.content == "+ARVerbs"){
      var memory = {}
      if (fs.existsSync('arverb.json')) {
        var memory = JSON.parse(fs.readFileSync("arverb.json", "utf8"))
      }

      console.log(memory)
      //read in save file and set to memory
      //var memory = whateverfile
      //var memory = {}
      //memory[msg.author.id] = word
      //var lastword = memory[msg.author.id]
      var words = ['nadar', 'hablar', 'estudiar', 'bailar', 'cantar', 'escuchar', 'dibujar', 'limpiar', 'trabajar', 'viajar']
      var meanings = ['to swim', 'to talk', 'to study', 'to dance', 'to sing', 'to listen', 'to draw', 'to clean', 'to work', 'to travel']
      var endings = ['o', 'as', 'a', 'amos', 'áis', 'an']
      var subjectPronouns = ['yo', 'tú', 'él/ella/usted', 'nosotros', 'vosotros', 'ellos/ellas/ustedes']
      var wordNumber = Math.floor(Math.random()*(words.length))
      var word = words[wordNumber]
      var meaning = meanings[wordNumber]
      var wordLength = word.length

      word = word.substring(0, wordLength-2)
      var endingNumber = Math.floor(Math.random()*(endings.length))
      word += endings[endingNumber]

      var subjectPronoun = subjectPronouns[endingNumber]

      memory[msg.author.id] = {}

      memory[msg.author.id].lastWord = word
      memory[msg.author.id].meaning = meaning
      memory[msg.author.id].subjectPronoun = subjectPronoun





      msg.reply(word)
      //save memory to file
      fs.writeFile("arverb.json", JSON.stringify(memory), "utf8", null);
    }
    /*else{
      var content = msg.content.substring(7)

      var subjectPronounTranslations = ["I", "you", "he/she/you", "we", "you all (Spain)", "they/you all"]

      var memory = JSON.parse(fs.readFileSync("arverb.json", "utf8"))

      msg.reply(memory[msg.author.id]["lastWord"] + " " + memory[msg.author.id]["meaning"] + " " + memory[msg.author.id]["subjectPronoun"])

    }*/
  },
  responseSubjectPronoun(msg){
    console.log("test")
    msg.reply("test")
    var content = msg.content.substring(9)

    var memory = JSON.parse(fs.readFileSync("arverb.json", "utf8"))

    var pronoun  = memory[msg.author.id]["subjectPronoun"]

    if (pronoun == content){
      msg.reply("Correct!")
    }
    else{
      msg.reply("Incorrect, the correct subject pronoun is " + pronoun + ".")
    }

    // msg.reply(memory[msg.author.id]["lastWord"] + " " + memory[msg.author.id]["meaning"] + " " + memory[msg.author.id]["subjectPronoun"])

module.exports = {
  handleARVerb(msg){
    var words = ['nadar', 'hablar', 'estudiar', 'bailar', 'cantar', 'escuchar', 'dibujar', 'limpiar', 'trabajar', 'viajar']
    var endings = ['o', 'as', 'a', 'amos', 'áis', 'an']

    var word = words[Math.floor(Math.random()*(words.length))]
    var wordLength = word.length
    word = word.substring(0, wordLength-2)
    msg.reply(word)
  }
}
