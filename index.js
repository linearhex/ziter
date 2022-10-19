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
const load = require('./handler/cmds_index.js')

const Aoijs = require('aoi.js')
const bot = new Aoijs.Bot({
    token: client.token,
    prefix: [client.prefix.default, client.prefix.recommended, client.mention.one, client.mention.two],
    intents: "all",
    database: {
      db: require("dbdjs.db"),
    type: "dbdjs.db",
    path: "./db/",
    tables: ["index"],
    },
    respondOnEdit: {
      commands: true,
      nonPrefixed: true,
      alwaysExecute: true
    },
  suppressAllErrors: true,
  autoUpdate: true,
  events : {
   functionError : true
  }
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
voice.onTrackStart()

require('./handler/event_index.js')(bot)
require('./handler/status_index.js')(bot)
require('./handler/db_index.js')(bot)

const loader = new Aoijs.LoadCommands(bot)
loader.load(bot.cmd, load.path.normalcmd)
loader.load(voice.cmd, load.path.voicecmd)
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


