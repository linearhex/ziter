module.exports = {
    name: "accept",
    aliases: ['acc'],
    code: `$takeRole[$guildID;$findUser[$message];$getServerVar[apps_role_pub]]
    $giveRole[$guildID;$findUser[$message];$getServerVar[apps_role_mem]]
    
    $sendMessage[<a:_:918393431666069555>: <@$findUser[$message]> you're now are member of ziter! ♡♡♡]
    
    $onlyIf[$message[1]!=;\`[ERROR]\`: Missing ID / Mention.]
    $onlyForRoles[$getServerVar[apps_role_lead];]
    $onlyIf[$hasRole[$guildID;$findUser[$message];$getServerVar[apps_role_mem]]==false;\`[EROR]\`: That user already member...]`
}