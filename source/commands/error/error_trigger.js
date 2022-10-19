module.exports = {
  type: 'functionError',
  channel: "922014327085617204",
  code: `$title[1;NEW ERROR!]
  $addField[1;Guild, Channel ID:;$guildID, $channelID;yes]
  $addField[1;Error:;$handleError[error];yes]
  $addField[1;Function:;\`\`\`$handleError[function]\`\`\`;yes]
  $addField[1;Commands:;\`\`\`$handleError[command]\`\`\`;yes]
  $color[1;$getServerVar[color]]
  $addTimestamp[1]
  $footer[1;$userTag[$clientID];$userAvatar[$clientID]]
  `
};