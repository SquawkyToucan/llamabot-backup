module.exports = {
    handleUnitConversion(msg) {
        // check to see if msg content looks like the following: +convert xx[f|c|k] to [f|c|k]
        var split = msg.content.split(' ', 4);
        var pValue = split[1].substring(0, split[1].length-1);
        if(split.length == 4) {
            if(split[2]=='to') {
                if(split[3].toLowerCase()=='f' || split[3].toLowerCase()=='c' || split[3].toLowerCase()=='k') {
                    if(split[1].toLowerCase().endsWith('f') && split[3].toLowerCase()=='c'){
                        msg.reply(pValue+'°F = '+this.convertFToC(parseInt(pValue))+'°C');
                    } else if(split[1].toLowerCase().endsWith('f') && split[3].toLowerCase()=='k'){
                        msg.reply(pValue+'°F = '+this.convertFToK(parseInt(pValue))+'K');
                    } else if(split[1].toLowerCase().endsWith('c') && split[3].toLowerCase()=='f') {
                        msg.reply(pValue+'°C = '+this.convertCToF(parseInt(pValue))+'°F');
                    } else if(split[1].toLowerCase().endsWith('c') && split[3].toLowerCase()=='k') {
                        msg.reply(pValue+'°C = '+this.convertCToK(parseInt(pValue))+'K');
                    } else if(split[1].toLowerCase().endsWith('k') && split[3].toLowerCase()=='f') {
                        msg.reply(pValue+'K = '+this.convertKToF(parseInt(pValue))+'°F');
                    } else if(split[1].toLowerCase().endswith('k') && split[3].toLowerCase()=='c') {
                        msg.reply(pValue+'K = '+this.convertKToC(parseInt(pValue))+'°C');
                    }
                }
            }
        } else {
            msg.reply('Improper Syntax, Example: +convert 5f to c');
        }
    },

    convertFToC(p1) {
        return ((p1-32) * 5)/9;
    },

    convertFToK(p1) {
        return ((p1-32)*5)/9 + 273.15;
    },

    convertCToF(p1) {
        return (p1*9)/5 + 32;
    }, 

    convertCToK(p1) {
        return p1+273.15;
    },

    convertKToF(p1) {
        return ((p1-273.15)*9)/5 + 32;
    },

    convertKToC(p1) {
        return p1-273.15;
    }
}