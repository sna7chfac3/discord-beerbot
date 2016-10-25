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

### License

MIT License

Copyright (c) 2016 David Herrington

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
