const Discord = require('discord.js');
const client = new Discord.Client();
client.login('MjM5MTE2OTcxMzkwNTMzNjMy.Cuw41g.ohzfXBPl9BSiDD6uhq-34xVEWQY');

const BreweryDb = require('brewerydb-node');
const brewdb = new BreweryDb('0a4fe898b6402baccb952720935f283a');

console.log('BeerBot has started');

function beerSearch(name, done) {
  brewdb.beer.find ({name: name}, function(err, suc) {
    if (err) {
      console.log("it failed");
    } else if (suc) {
      // console.log(suc[0]);
      console.log(suc[0].name);
      console.log(suc[0].abv);
      console.log(suc[0].labels.medium)
      console.log(suc[0].style.shortName);
    }
  });
};

client.on('message', message => {
  if (message.content.includes("!beerbot search")) {
    var input = message.content;
    var name = input.substr(input.lastIndexOf('search') + 7);
    beerSearch(name);
  }
});

client.on('message', message => {
  if (message.content === '!beerbot') {
    message.reply('pong');
  }
});
