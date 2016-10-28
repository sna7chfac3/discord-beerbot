const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login('discord-token');

const BreweryDb = require('brewerydb-node');
const brewdb = new BreweryDb('brewerydb-api-key');

bot.on('ready', ready => {
  console.log("BeerBot has started");
})

bot.on('message', message => {
  let prefix = '!beerbot ';

  // beer search
  if (message.content.startsWith(prefix + "beer")) {
    var input = message.content;
    var beerName = input.substr(input.indexOf('!') + 14);
    brewdb.search.beers ({q: beerName}, function(err, data) {
      if (err) {
        message.reply("There was an error");
      } else if (data) {
        var result = data[0];
        console.log("Beer search: " + beerName);
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

  // brewery search
  if (message.content.startsWith(prefix + "brewery")) {
    var input = message.content;
    var breweryName = input.substr(input.indexOf('!') + 17);
    brewdb.search.breweries ({q: breweryName}, function(err, data) {
      if (err) {
        message.reply("There was an error");
      } else if (data) {
        var result = data[0];
        console.log("Brewery search: " + breweryName);
        message.channel.sendMessage("Name: " + result.name + "\nEstablished: " + result.established + "\nWebsite: " + result.website);
        if (typeof result.description !== 'undefined') {
          message.channel.sendMessage("Description: " + result.description);
        }
        if (typeof result.images.large !== 'undefined') {
          message.channel.sendFile(result.images.large);
        }
      }
    });
  }

  // command list
  const commands = require('./commands.json');

  if (message.content.startsWith(prefix + "help")) {
    message.author.sendMessage("Use the syntax `!beerbot <parameter> <query>` without the angle brackets");
    message.author.sendMessage("`parameter | description`");
    for (key in commands) {
      message.author.sendMessage("`" + key + " | " + commands[key] + "`");
    }
  }

  if (message.content === prefix) {
    message.reply("pong");
  }
});
