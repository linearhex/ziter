module.exports = {
  name: "membercount",
  aliases: ['mc'],
  code: `$reply[$messageID;no]
  $color[1;2f3136]
  $addTimestamp[1]
  $description[1;# All Members: \`$ordinal[$membersCount]\`]
  $footer[1;$getVar[footers];$userAvatar[$clientID]]
  `
}