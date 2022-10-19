module.exports = [{
  name: "tempban",
  aliases: ['cooldownban'],
  code: `$ban[$findUser[$message[1]];$guildID;7;$replaceText[$replaceText[$checkCondition[$messageSlice[2]!=];true;No Reason];false;$messageSlice[2]]]

  $description[1;$userTag[$findUser[$message[1]]] was banned
ID : $findUser[$message[1]]]
  $color[1;2f3136]
  $footer[1;$getVar[footers];$userAvatar[$clientID]]

  $setTimeout[tempban;$message[2];{"channelID": "$channelID","userID": "$findUser[$message[1]]","authorID": "$authorID","guildID": "$guildID","time": "$message[2]"}]
  
  $sendDM[{newEmbed:{title:You has been temporary banned for $message[2] from $serverName}{description:**Reason:**
$replaceText[$replaceText[$checkCondition[$messageSlice[2]!=];true;$messageSlice[2]];false;$messageSlice[2]]}{footer:Banned by $userTag[$authorID]}{color:2f3136}{thumbnail:$userAvatar[$authorID]}};$findUser[$message[1]]]

$onlyPerms[ban;manageserver;\`[ERROR]\`: You don't have perms to do this.]

$onlyIf[$message[1]!=;\`[ERROR]\`: Please mention or type their id!]

$onlyIf[$hasPerms[$guildID;$findUser[$message[1]];admin;ban;manageserver]==false;\`[ERROR]\`: You can't kick a admin!]

$onlyIf[$isBanned[$findUser[$message[1];$guildID]]==false;\`[ERROR]\`: That users already banned!]

$onlyIf[$userExists[$findUser[$message[1]]]==true;\`[ERROR]\`: That users doesn't exists!]

$onlyIf[$checkCondition[$findUser[$message[1]]==$ownerID]==false;\`[ERROR]\`: You can't ban owners lmfao.]

$onlyIf[$memberExists[$findUser[$message[1]];$guildID]==true;\`[ERROR]\`: That users doesn't exists!]
`
}, {
  type: 'timeout',
  name: "tempban",
  code: `$unban[$timeoutData[userID];$timeoutData[guildID]]

$channelSendMessage[$timeoutData[channelID];$userTag[$timeoutData[userID]] has been removed for $timeoutData[time]]

  $onlyIf[$isBanned[$timeoutData[userID];$timeoutData[guildID]]==true;]`
}]