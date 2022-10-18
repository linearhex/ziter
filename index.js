const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Online 24/7')
});

app.listen(3000, () => {
  console.log('server started');
});


const Discord = require('discord.js');
const client = require('./config/main.js')
const load = require('./handler/cmdsindex.js')

const Aoijs = require('aoi.js')
const bot = new Aoijs.Bot({
    token: client.token,
    prefix: [client.prefix.default, client.prefix.recommended, client.mention.one, client.mention.two],
    intents: "all",
    database: {
      type: client.db.type,
      path: client.db.path,
      tables: [client.db.tables],
      promisify: client.db.promisify
    },
    respondOnEdit: {
      commands: true,
      nonPrefixed: true,
      alwaysExecute: true
    },
  suppressAllErrors: false,
  autoUpdate: true
})

const voice = new Aoijs.Voice(bot, {
  /*** 
  soundcloud: {
    clientID: client.soundcloud.clientId
  }, 
  ***/
  cache: {
    cacheType: "Memory",
    enabled: true,
  },
});

require('./handler/event.js')(bot)
require('./handler/status.js')(bot)
require('./handler/db.js')(bot)

const loader = new Aoijs.LoadCommands(bot)
loader.load(bot.cmd, load.path)
loader.setColors({
    walking: ["blink", "dim", "fgWhite"],
    failedWalking: {
        name: ["bright", "fgYellow", "underline"],
        text: ["bright", "fgRed"]
    },
    typeError: {
        command: ["bright", "fgYellow"],
        type: ["fgYellow"],
        text: ["bright", "fgRed"]
    },
    failLoad: {
        command: ["bright", "fgMagenta"],
        type: ["fgRed"],
        text: ["bright", "fgRed"],
    },
    loaded: {
        command: ["bright", "fgCyan"],
        type: ["bright", "fgBlue"],
        text: ["bright", "fgGreen"]
    },
  })

const Lavalink = new Aoijs.Lavalink(bot);

Lavalink.addNode({ 
  url: client.lavalink.url, 
  password: client.lavalink.password, 
  name: client.lavalink.usernames, 
  secure: client.lavalink.ssl 
});
