const Discord = require('discord.js');
const client = new Discord.Client();
client.login('MjM5MTE2OTcxMzkwNTMzNjMy.Cuw41g.ohzfXBPl9BSiDD6uhq-34xVEWQY');

const BreweryDb = require('node-brewerydb');
const brewdb = new BreweryDb({apiKey: "0a4fe898b6402baccb952720935f283a"});

console.log('BeerBot has started');

client.on('message', message => {
  if (message.content.includes("!beerbot search")) {
    var input = message.content;
    var nameToSearch = input.substr(input.lastIndexOf('search') + 7);
    brewdb.beers({name: nameToSearch}, function(err, res) {
      if (err) {
      }
      console.log(res);
    });
    // brewdb.beers({name: nameToSearch}, function(res) {;
      // console.log("step 2");
      // var finalResult = JSON.stringify(res);
      // console.log(finalResult);
      // if (err === 1) {
        // console.log("error, you fucker");
      // } else if (err === 0) {
        // var finalResult = JSON.parse(res);
        // console.log("success");
      // }
    // });
  }
});

client.on('message', message => {
  if (message.content === '!beerbot') {
    message.reply('pong');
  }
});
