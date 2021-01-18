module.exports = {
    handleImg(msg){
        const request = require('request');

request('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=false', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
msg.reply(body[0]);
});
    }
}