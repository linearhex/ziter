module.exports = (bot) => {
    bot.status(
     { text: "/zitergp", type: "LISTENING", status: "idle", time: 3 }, 
     { text: "Loveable", type: "LISTENING", status: "idle", time: 3 },
     { text: "<3", type: "PLAYING", status: "idle", time: 3 }
  )
}
