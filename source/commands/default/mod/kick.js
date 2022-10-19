module.exports = {
  name: "kick",
  aliases: ['kicks'],
  code: `$kick[$findUser[$message[1]];$guildID;$replaceText[$replaceText[$checkCondition[$messageSlice[1]!=];true;No Reason];false;$messageSlice[1]]]
  $description[1;$userTag[$findUser[$message[1]]] was kicked
ID : $findUser[$message[1]]]
  $color[1;2f3136]
  $footer[1;$getVar[footers];$userAvatar[$clientID]]
  
  $sendDM[{newEmbed:{title:You has been kicked from $serverName}{description:**Reason:**
$replaceText[$replaceText[$checkCondition[$messageSlice[1]!=];true;No Reason];false;$messageSlice[1]]}{footer:Kicked by $userTag[$authorID]}{color:2f3136}{thumbnail:$userAvatar[$authorID]}};$findUser[$message[1]]]

$onlyPerms[kick;manageserver;You don't have perms to do this.]
$onlyIf[$message[1]!=;\`[ERROR]\`: Please mention or type their id!]
$onlyIf[$userExists[$findUser[$message[1]]==true;\`[ERROR]\`: That users doesn't exists!]]
$onlyIf[$findUser[$message[1]]!=$ownerID;\`[ERROR]\`: You can't kick owners lmfao.]
$onlyIf[$memberExists[$findUser[$message[1]];$guildID]==true;\`[ERROR]\`: That users doesn't exists!]]
$onlyIf[$hasPerms[$guildID;$findUser[$message[1]];admin;kick;manageserver]==false;\`[ERROR]\`: You can't kick a admin!]`
}