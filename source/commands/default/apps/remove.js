module.exports = {
    name: "remove",
    code: `$takeRole[$guildID;$findUser[$message];$getServerVar[apps_role_mem]]
    $giveRole[$guildID;$findUser[$message];$getServerVar[apps_role_pub]]
    $addCmdReactions[<a:_:918393431666069555>]
    $onlyIf[$message[1]!=;\`[ERROR]\`: Missing ID / Mention.]
    $onlyForRoles[$getServerVar[apps_role_lead];]
    $onlyIf[$hasRole[$guildID;$findUser[$message];$getServerVar[apps_role_pub]]==false;\`[EROR]\`: That user isn't member...]`
}