const Discord = require('discord.js');
const client = new Discord.Client();
client.login('MjM5MTE2OTcxMzkwNTMzNjMy.Cuw41g.ohzfXBPl9BSiDD6uhq-34xVEWQY')

const BreweryDb = require('node-brewerydb');
const brewdb = new BreweryDb({apiKey: "0a4fe898b6402baccb952720935f283a"});

console.log('BeerBot has started')

var result;

function searchBeer(toSearch) {
  brewdb.beers({name: toSearch}, function(err, res) {
    if (err) {
      console.log("An error has occured");
    }
    result = JSON.parse(res);
    console.log(result)
  });
}

client.on('message', message => {
  if (message.content === '!beerbot') {
    message.reply('pong');
  }
});

client.on('message', message => {
  if (message.content.includes("!beerbot search")) {
    var input = message.content
    var nameToSearch = input.substr(input.lastIndexOf('search') + 7);
    searchBeer(nameToSearch);
    // console.log(result);
    // message.reply(result);
  }
});
