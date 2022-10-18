module.exports = (bot) => {
    bot.status(
     { text: "/gowon", type: "LISTENING", status: "idle", time: 3 }, 
     { text: "boost4perks", type: "LISTENING", status: "idle", time: 3 },
     { text: "<3", type: "PLAYING", status: "idle", time: 3 }
  )
}