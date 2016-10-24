const Discord = require('discord.js');
const client = new Discord.Client();
client.login('discord-token');

const BreweryDb = require('brewerydb-node');
const brewdb = new BreweryDb('brewerydb-api-key');

console.log('BeerBot has started');

client.on('message', message => {
  if (message.content.includes("!beerbot search")) {
    var input = message.content;
    var name = input.substr(input.indexOf('!') + 16)
    brewdb.search.beers ({q: name}, function(err, data) {
      if (err) {
        message.reply("There was an error");
      } else if (data) {
        var result = data[0];
        console.log(name);
        message.channel.sendMessage("Name: " + result.name + "\nABV: " + result.abv + "\nType: " + result.style.shortName);
        if (typeof result.description !== 'undefined') {
          message.channel.sendMessage("Description: " + result.description);
        }
        if (typeof result.labels !== 'undefined') {
          message.channel.sendFile(result.labels.large);
        }
      }
    });
  }
});

client.on('message', message => {
  if (message.content === '!beerbot') {
    message.reply('pong');
  }
});
