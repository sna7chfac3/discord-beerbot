const Discord = require('discord.js');
const client = new Discord.Client();
client.login('MjM5MTE2OTcxMzkwNTMzNjMy.Cuw41g.ohzfXBPl9BSiDD6uhq-34xVEWQY');

const BreweryDb = require('brewerydb-node');
const brewdb = new BreweryDb('0a4fe898b6402baccb952720935f283a');

console.log('BeerBot has started');

client.on('message', message => {
  if (message.content.includes("!beerbot search")) {
    var input = message.content;
    var name = input.substr(input.lastIndexOf('search') + 7);
    brewdb.search.beers ({q: name}, function(err, data) {
      if (err) {
        message.reply("there was an error");
      } else if (data) {
        var result = data[0];
        message.channel.sendMessage("Name: " + result.name + "\nABV: " + result.abv + "\nType: " + result.style.shortName + "\nLabel: " + result.labels.large);
      }
    });
  }
});

client.on('message', message => {
  if (message.content === '!beerbot') {
    message.reply('pong');
  }
});
