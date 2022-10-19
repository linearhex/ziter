module.exports = {
  name: "infouser",
  aliases: ['info-user'],
  code: `
  $addField[1;Roles [$userRolesCount[$get[user];$guildID]] :;$userRoles[$get[user];$guildID;mention;, ];yes]

  $addField[1;Permissions :;$replaceText[$replaceText[$checkContains[$get[perms];admin];true;Administrator];false;$toLocaleUppercase[$get[perms]]];yes]

  $addField[1;ID :;\`$get[user]\`;yes]

$addField[1;Mentioned :;<@$get[user]>;yes]

$addField[1;Joined Server :;<t:$truncate[$divide[$memberJoinedDate[$findUser[$message];$guildID];1000]]:f>;yes]

$addField[1;Joined Discord :;$creationDate[$findUser[$message];date];yes]

$addField[1;Server Owner? :;$toLocaleUppercase[$checkContains[$get[user];$ownerID]];yes]

$author[1;$userTag[$get[user]]]
$thumbnail[1;$userAvatar[$get[user]]]
$color[1;2f3136]

$let[perms;$userPerms[$findUser[$message];, ;$guildID]]
$let[user;$replaceText[$replaceText[$checkCondition[$message!=];true;$authorID];false;$findUser[$message]]]

$onlyIf[$memberExists[$findUser[$message];$guildID]==true;\`[ERROR]\`: That user doesn't exists in here!]
  `
}