module.exports = {
name: "appsclose",
code: `$onlyForRoles[927721522624360450;929438176295129128;927720317776969819;930470875935940639;bro you can't do that :P]
$title[1;*ੈ✩‧₊˚ APPS ARE CLOSED!]
$thumbnail[1;https://cdn.discordapp.com/emojis/927388815147032576.png?v=1]
$description[1;. please wait a new annoucement until apps back open!]
$footer[1;$getVar[footers];$userAvatar[$clientID]]
$addTimestamp[1]

$modifyChannelPerms[$guildID;927721188564828161;-viewchannel]
$setServerVar[appsstatus;closed]

$onlyIf[$getServerVar[appsstatus]==open;\`[ERROR]\`: Apps Already Closed.]
$onlyIf[$channelExists[927721188564828161]==true;\`[ERROR]\`: Channel Doesn't Exists or has Been Deleted.]`
}