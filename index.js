const Discord = require('discord.js');
const aoimongo = require('aoi.mongo').default
const mongoose = require('mongoose');

const client = require('./config/main.js');
const load = require('./handler/cmds.js');

mongoose.connect(process.env.mongo, {
  useNewURlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  keepAlive: true
})

mongo.createModel('main')

const Aoijs = require('aoi.js')
const bot = new Aoijs.Bot({
    token: client.token,
    prefix: [client.prefix.default, client.prefix.recommended, client.mention.one, client.mention.two],
    intents: "all",
    database: {
     db: require('aoi.mongo'),
     type: "aoi.mongo",
     path: process.env.mongo,
     table: ["main"],
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

require('./handler/events.js')(bot)
require('./handler/status.js')(bot)
require('./handler/databases.js')(bot)

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


