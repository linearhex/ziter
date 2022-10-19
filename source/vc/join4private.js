module.exports = [{
  type: 'voiceStateUpdate',
  name: "joins",
  channel: "$getServerVar[vcprivates]",
  code: `$moveUser[$guildID;$authorID;$get[vc]]
$modifyChannelPerms[$guildID;$get[vc];-connect]
$let[vc;$cloneChannel[$getServerVar[vcprivates];$username[$authorID]'s private;yes]]

$onlyIf[$newState[channelId]!=;]
$onlyIf[$oldState[channelId]==;]
$onlyIf[$getServerVar[vcprivates]==$voiceID[$authorID];]
$onlyIf[$getServerVar[vcprivates]!=;]`
}, {
  type: 'voiceStateUpdate',
  name: "leave",
  channel: "$voiceID[$authorID]",
  code: `$deleteChannel[$voiceID[$authorID]]

$onlyIf[]]
$onlyIf[$newState[channelId]!=;]
$onlyIf[$oldState[channelId]==;]
$onlyIf[$getServerVar[vcprivates]!=;]`
}, {
  name: "setvcprivate",
  code: `$setServerVar[vcprivates;$message[1]]
 $reply
 $description[1;Setted VC Privates to <#$message[1]>!
**NOTE:** You must Use this Commands so your Create Private VC will working!]
 $color[1;$getVar[color]]
 $onlyIf[$isNumber[$message[1]]==true;$getVar[error_joinvcpriv_invalidId]]
 $onlyIf[$message[1]!=;$getVar[error_joinvcpriv_invalidId]]
 $onlyIf[$message[1]==$findChannel[$message[1]];$getVar[error_joinvcpriv_invalidId]]
$onlyPerms[managechannel;$getVar[error_missingperms] \`MANAGE_CHANNEL\`]`
}]