module.exports = {
    handleRoll(msg) {
        //msg.content looks like this: +roll [x] where x is any positive integer
        //if not print help line
        //rolls dice with number of sides that are equal to number they add
        var split = msg.content.split(' ');
        if (split.length == 2) {
            if (isNaN(split[1])) {
                msg.reply('When trying to roll a die type "+roll [x]" where x is any positive integer');
            }
            else {
                if (split[1] >= 1) {
                    var rolled = Math.floor(Math.random() * Math.floor(split[1]));
                    msg.reply(rolled+1);
                }
                else {
                    msg.reply('When trying to roll a die type "+roll [x]" where x is any positive integer');
                }
            }
        }
        else {
            msg.reply('When trying to roll a die type "+roll [x]" where x is any positive integer');
        }
        
    }
}