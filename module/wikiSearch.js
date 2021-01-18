module.exports = {
    handleWiki(msg){
        //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        //var URL = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=';

        fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            msg.reply(JSON.stringify(myJson));
        });
        msg.reply(ob);
    }
}