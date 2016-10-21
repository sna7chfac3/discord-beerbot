const Discord = require('discord.js');
const client = new Discord.Client();

console.log('BeerBot has started')

client.on('message', message => {
  if (message.content === '!beerbot') {
    message.reply('pong');
  }
});

client.login('token')
