# BeerBot - A Discord bot to search for beer

## Requirements

- Node
- Discord App Bot User Token
- BreweryDB API Key

## Setup

1. Install Node
2. Clone this repository locally
3. cd into the directroy and run npm install
4. Create a Discord application with a bot user
5. Edit `bot.js`, enter your Discord token and BreweryDB API key in the proper locations
6. Open a browser and enter the url:

   ```
   https://discordapp.com/oauth2/authorize?&client_id=CLIENT_ID&scope=bot&permissions=0
   ```

   but replace `CLIENT_ID` with your client ID from your Discord application
7. Select your server from the drop down and then click Authorize
8. run `node bot.js`

## Commands

There's only one command and it only does one thing righ now:

```
!beerbot search <name of beer to search>
```

This will search for the beer then return the name, ABV, type, description, and label if it
has one.
