module.exports = {
    name: "botinfo",
    aliases: ['infobot'],
    code: `$title[1;$toLocaleUppercase[$username[$clientID]] Bot Statistics]
    $thumbnail[1;$userAvatar[$clientID]]
$footer[1;$getVar[footers];$userAvatar[$clientID]]
    $color[1;#2f3136]
    $addField[1;Others;
• Total commands: $sum[$commandsCount;6]
• Latency: $ping ms
• Uptime: $getVar[uptime]
• Owner: $usertag[$botownerid]]
    $addField[1;Versions;
• NodeJS Version: $getObjectProperty[nodev]
• Discord.js Version: $getObjectProperty[discordv]
• Lavalink Version: 1.1.1;yes]
    $addField[1;Hosting Related Stats;
• CPU Usage: $cpu
• CPU Model: $djsEval[require ('os').cpus()[0\].model;yes] 
• CPU Platform: $djsEval[require ('os').platform();yes]
• RAM Usage: $ram MB
• Memory Usage: $djsEval[process.memoryUsage().rss / 1024 / 1024;yes] MB;yes]
    $addTimestamp[1]
     $djseval[d.object.nodev = process.version
    d.object.discordv = require('discord.js').version]
    $createObject[{}]
    `
}