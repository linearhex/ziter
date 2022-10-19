module.exports = {
  name: "dm",
  aliases: ['dms'],
  code: `$sendMessage[you just send message to $username[$findUser[$message[1]]]!]
  $sendDM[{newEmbed:{author:$userTag[$authorID]:$authorAvatar}{color:2f3136}{description:$messageSlice[1]}{timestamp}};$findUser[$message[1]]]
  
 $onlyIf[$memberExists[$findUser[$message[1]];$guildID]==true;\`[ERROR]\`: That user's doesn't exists in here!]

  $onlyIf[$messageSlice[1]!=;\`[ERROR]\`: Please message you want to send dms!]

$onlyIf[$isUserDmEnabled[$findUser[$message[1]]]==true;\`[ERROR]\`: That user didn't active theirs dms....]
  
  $onlyIf[$message[1]!=;\`[ERROR]\`: Please mention users you want to send dms!]`
}