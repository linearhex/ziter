module.exports = {
  name: "purge",
  aliases: ['clear'],
  code: `$sendMessage[{newEmbed:{description:Clearing $message[1] messages}{color:2f3136}{footer:cleared by $userTag[$authorID]}}]
$deleteIn[2s]
  $clear[$sum[$message[1];1];everyone]
  $onlyPerms[managemessages;managechannel;\`[ERROR]\`: You don't have perms to do this.]
  $onlyIf[$message[1]!=;\`[ERROR]\`: Please put valid amount!]
  $onlyIf[$message[1]!=0;\`[ERROR]\`: Minimal amount is 1!]
  $onlyIf[$isNumber[$message[1]]==true;\`[ERROR]\`: That invalid amounts!]`
}