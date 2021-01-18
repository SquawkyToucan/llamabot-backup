module.exports = {
  handleLlama(msg){
    msg.reply("https://onekindplanet.org/animal/llama/\n\nhttps://www.tripsavvy.com/fun-facts-about-llamas-3880940\n\nhttp://www.softschools.com/facts/animals/llama_facts/130/")
    var random = Math.floor(Math.random()*12);
    var content = msg.content
    content = content.substring(11)
    var random = Math.floor(Math.random()*20);
    if (random == 0){
      msg.reply('Llamas can be 6 feet tall.')
    }
    else if (random == 1){
      msg.reply('Llamas are easy to train.')
    }
    else if (random == 2){
      msg.reply('Llamas were domesticated 5,000 years ago.')
    }
    else if (random == 3){
      msg.reply('Llamas are known for being pack animals in Peru.')
    }
    else if (random == 4){
      msg.reply('I don\'t care about llamas.')
    }
    else if (random == 5){
      msg.reply('Llamas can grow up to 6 feet tall, Eli wishes he could be that tall!')
    }
    else if (random == 6){
      msg.reply("Llamas can live to be 20 years old.")
    }
    else if (random == 7){
      msg.reply('Llama babys are called "cria"(KREE-uh). A llama pregnancy last for 350 days.')
    }
    else if (random == 8){
      msg.reply('Llamas don\'t bite, they spit when agrivated.')
    }
    else if (random == 9){
      msg.reply('Llamas are scared of dog-like animals, like below.')
      var dog = `\`\`\`
        __      _
      o'')}____//
      \`_/      )
      (_(_/-(_/
\`\`\``
      msg.reply(dog)
    }
    else if (random == 10){
      msg.reply('Llamas care for one and other.')
    }
    else if (random == 11){
      msg.reply('Llamas are members of the camelid, or camel, family.')
    }
    else if (random == 12){
      msg.reply('Llamas are hardy and well suited to harsh environments.')
    }
    else if (random == 13){
      msg.reply('Llama poop has almost no odor. Llama farmers refer to llama manure as "llama beans." It makes great, eco-friendly fertilizer. The Incas in Peru burned dried llama poop for fuel.')
    }
    else if (random == 14){
      msg.reply('Llamas have two wild "cousins" that have never been domesticated: the vicuña and the guanaco.')
    }
    else if (random == 15){
      msg.reply('Llama\'s body is covered with wool which can be black, gray, white or brown, with variety of patterns.')
    }
    else if (random == 16){
      msg.reply('Llamas do not have specific time of mating. Male usually chases female for up to 10 minutes until she is finally ready to mate.')
    }
    else if (random == 17){
      msg.reply('Llamas are very intelligent, but stubborn animals. When the load on its back is too heavy, llama will refuse to carry it until some of the load is removed.')
    }
    else if (random == 18){
      msg.reply('Llama has excellent sense of sight, smell and hearing, which are used for detection of potential danger.')
    }
    else if (random == 19){
      msg.reply('A group of llamas is called a herd.')
    }
  }
}
