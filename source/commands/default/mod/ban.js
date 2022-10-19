module.exports = [{
  name: "ban",
  aliases: ['bans'],
  code: `$ban[$findUser[$message[1]];$guildID;7;$replaceText[$replaceText[$checkCondition[$messageSlice[1]!=];true;No Reason];false;$messageSlice[1]]]

  $description[1;$userTag[$findUser[$message[1]]] was banned]
  $color[1;2f3136]
  $footer[1;ID : $findUser[$message[1]]]
  
  $sendDM[{newEmbed:{title:You has been banned from $serverName}{description:**Reason:**
$replaceText[$replaceText[$checkCondition[$messageSlice[1]!=];true;No Reason];false;$messageSlice[1]]}{footer:Banned by $userTag[$authorID]}{color:2f3136}{thumbnail:$userAvatar[$authorID]}};$findUser[$message[1]]]

$onlyPerms[ban;manageserver;You don't have perms to do this.]

$onlyIf[$message[1]!=;\`[ERROR]\`: Please mention or type their id!]

$onlyIf[$isBanned[$findUser[$message[1]];$guildID]==false;\`[ERROR]\`: That users already banned!]

$onlyIf[$checkCondition[$findUser[$message[1]]==$ownerID]==false;\`[ERROR]\`: You can't ban owners lmfao.]

$onlyIf[$userExists[$findUser[$message[1]]]==true;\`[ERROR]\`: That users doesn't exists!]

$onlyIf[$memberExists[$findUser[$message[1]];$guildID]==true;\`[ERROR]\`: That users doesn't exists!]

$onlyIf[$hasPerms[$guildID;$findUser[$message[1]];admin;ban;manageserver]==false;\`[ERROR]\`: You can't kick a admin!]`
}, {
  name: "unban",
  aliases: ['removeban'],
  code: `$unban[$findUser[$message[1]];$guildID]

  $description[1;$userTag[$findUser[$message[1]]] has been deleted from ban!
ID : $findUser[$message[1]]]
  $color[1;2f3136]
  $footer[1;$getVar[footers];$userAvatar[$clientID]]

  $onlyIf[$isBanned[$findUser[$message[1]];$guildID]==true;\`[ERROR]\`: That users already unbanned!]

  $onlyPerms[ban;manageserver;\`[ERROR]\`: You don't have perms to do this.]

  $onlyIf[$message[1]!=;\`[ERROR]\`: Please type their id!]

  $onlyIf[$userExists[$findUser[$message[1]]]==true;\`[ERROR]\`: That users doesn't exists!]`
}]