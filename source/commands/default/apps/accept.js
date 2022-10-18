module.exports = {
  name: "accept",
  code: `
  $giveRole[$guildID;$findUser[$message];927754478646616094]
  $takeRole[$guildID;$findUser[$message];927813633910657074]
  $sendMessage[<@$findUser[$message]> congrats, you're now a genetic members! <a:wheart6:928387158908235908>]

  $onlyForRoles[927721522624360450;927720317776969819;930470875935940639;\`[ERROR]\`: You're not allowed to using this.]
$onlyIf[$memberExists[$findUser[$message];$guildID]==true;\`[ERROR]\`: That user's doesn't exists in here!]
$onlyIf[$hasRoles[$guildID;$findUser[$message];927754478646616094]==false;\`[ERROR]\`: That's users already members]
$onlyIf[$checkCondition[$findUser[$message]==$authorID]==false;\`[ERROR]\`: You cannot accept yourself.]
$onlyIf[$message!=;\`[ERROR]\`: Please mention or copy their id/userTag!]

$textSplit[$getUserVar[accvoted;$findUser[$message]];/]`
}