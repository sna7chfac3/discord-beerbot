# BeerBot - A Discord bot to search for beer

## Requirements

- Node
- discord.js
- brewerydb-node
- Discord App Bot User Token
- BreweryDB API Key

## Setup

1. Install Node
2. Install discord.js and brewerydb-node with npm
3. Clone this repository
4. Create a Discord application with a bot user
5. Edit `main.js`, enter your Discord token and BreweryDB API key in the proper
   locations
6. Open a browser and enter the url:
   ```
   https://discordapp.com/oauth2/authorize?&client_id=CLIENT_ID&scope=bot&permissions=0
   ```
   but replace `CLIENT_ID` with your client ID from your Discord application
7. Select your server from the drop down and then click Authorize
8. run `node main.js`

After installing Node, installing discord.js and brewerydb-node with npm,
just clone this repository then run edit main.js and enter your token and API
keys in the proper locations.

## Commands

There's only one command and it only does one thing righ now:

```
!beerbot search <name of beer to search>
```

This will search for the beer then return the name, ABV, type, and label if it
has one.
