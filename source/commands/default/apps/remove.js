module.exports = [{
  name: "remove",
  code: `$userTag[$findUser[$message]] has been removed
$addCmdReactions[<a:white_verified:903247519927132191>]
$takeRole[$guildID;$findUser[$message];927754478646616094]$giveRole[$guildID;$findUser[$message];927813633910657074]

$onlyForRoles[927721522624360450;927720317776969819;930470875935940639;\`[ERROR]\`: You're not allowed to using this.]
$onlyIf[$memberExists[$findUser[$message];$guildID]==true;\`[ERROR]\`:That user's doesn't exists in here!]
$onlyIf[$checkCondition[$findUser[$message]==$authorID]==false;\`[ERROR]\`: You cannot remove yourself.]
$onlyIf[$message!=;\`[ERROR]\`:Please mention or copy their id/userTag!]`
}]