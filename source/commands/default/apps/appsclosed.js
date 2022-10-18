module.exports = {
name: "appsopen",
code: `$onlyForRoles[927721522624360450;929438176295129128;927720317776969819;930470875935940639;bro you can't do that :P]
$title[1;*ੈ✩‧₊˚ APPS ARE OPEN!]
$thumbnail[1;https://cdn.discordapp.com/emojis/927388815147032576.png?v=1]
$description[1;. feel free to apply in <#927721188564828161>, please make sure you readed the rules before apply!]
$footer[1;$getVar[footers];$userAvatar[$clientID]]
$addTimestamp[1]
$color[1;2f3136]

$modifyChannelPerms[$guildID;927721188564828161;+viewchannel]
$setServerVar[appsstatus;open]

$onlyIf[$getServerVar[appsstatus]==closed;\`[ERROR]\`: Apps Already Opened.]
$onlyIf[$channelExists[927721188564828161]==true;\`[ERROR]\`: Channel Doesn't Exists or has Been Deleted.]`
}