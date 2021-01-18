module.exports = {
  handleAsciiRequest(msg){
    //var randomNumber = Math.floor(Math.random()*10)
    var dog = "  __      _\n"
    "o'')}____//\n"
    " `_/      )\n"
    " (_(_/-(_/"
    msg.reply(dog)


    if (msg.content != "+asciiArt"){
      var content = msg.content
      content = content.substring(10)
 

      if (content == "dog"){
        var dog = `\`\`\`
          __      _
        o'')}____//
        \`_/      )
        (_(_/-(_/
\`\`\``
        msg.reply(dog)
      }

      else if (content == "cat"){
        var cat = `\`\`\`
        |\\---/|
        | o_o |
         \\_^_/
\`\`\``
        msg.reply(cat)
      }
      else if (content == "fish"){
        var fish = `\`\`\`
        .
        \\_____)\\_____
        /--v____ __\`<
                )/
                '

\`\`\``
        msg.reply(fish)
      }
      else if (content == "bird"){
        var bird = `\`\`\`
         /\\ /\\
        ((ovo))
        ():::()
          VVV
\`\`\``
      msg.reply(bird)
      }
    }
  }
}
