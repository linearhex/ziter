module.exports = {
  name: "infoserver",
  aliases: ['info-server'],
  code: `$title[1;$serverName | $guildID]
  $thumbnail[1;$serverIcon]
  $addField[1;Vanity URL:;$replaceText[$replaceText[$checkCondition[$vanityURL==undefined];true;None];false;$vanityURL];yes]
  $addField[1;Boost Count:;$serverBoostCount;yes]
  $addField[1;Boost Level:;$serverBoostLevel;yes]
  $addField[1;Total Roles:;$ordinal[$roleCount];yes]
  $addField[1;Members Count:;$ordinal[$membersCount[$guildID]];yes]
  $addField[1;Channel Count:;$ordinal[$channelCount[$guildID;all]];yes]
  $addField[1;Created At:;$creationDate[$guildID;date];yes]
  $addField[1;Features:;$toLocaleUppercase[$serverFeatures];yes]
  $addField[1;Owner:;$userTag[$ownerID];yes]
  $color[1;2f3136]
  $footer[1;$getVar[footers];$userAvatar[$clientID]]
`
}