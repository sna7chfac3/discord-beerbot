const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login('discord-token');

const BreweryDb = require('brewerydb-node');
const brewdb = new BreweryDb('brewerydb-api-key');

bot.on('ready', ready => {
  console.log("BeerBot has started");
})

// beer search
bot.on('message', message => {
  if (message.content.includes("!beerbot search")) {
    var input = message.content;
    var beerName = input.substr(input.indexOf('!') + 20)
    brewdb.search.beers ({q: beerName}, function(err, data) {
      if (err) {
        message.reply("There was an error");
      } else if (data) {
        var result = data[0];
        console.log(beerName);
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

// ping
bot.on('message', message => {
  if (message.content === '!beerbot') {
    message.reply('pong');
  }
});
