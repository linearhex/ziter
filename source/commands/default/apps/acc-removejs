module.exports = [{
  name: "accept",
  aliases: ['acc'],
  code: `
$takeRole[$guildID;$findUser[$message];$getServerVar[apps_role_pub]]
$giverole[$guildId;$findUser[$message];$getServerVar[apps_role_mem]]

$sendMessage[<a:_:918393431666069555>: <@$findUser[$message]> you're now are member of ziter! ♡♡♡]

$onlyIf[$message[1]!=;\`[ERROR]\`: Missing ID / Mention.]
$onlyForRoles[$getServerVar[apps_role_lead];]
$onlyIf[$hasRole[$guildID;$findUser[$message];$getServerVar[apps_role_mem]]==false;\`[EROR]\`: That user already member...]
  `
}, {
  name: "remove",
  code: `
$takeRole[$guildID;$findUser[$message];$getServerVar[apps_role_mem]]
$giverole[$guildId;$findUser[$message];$getServerVar[apps_role_pub]]
$addCmdReactions[<a:_:918393431666069555>]
$onlyIf[$message[1]!=;\`[ERROR]\`: Missing ID / Mention.]
$onlyForRoles[$getServerVar[apps_role_lead];]
$onlyIf[$hasRole[$guildID;$findUser[$message];$getServerVar[apps_role_pub]]==false;\`[EROR]\`: That user isn't member...]
  `
}]
