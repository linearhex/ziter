const errormsg = require('./config/error.json');

module.exports = [{
  name: "lockchannel",
  aliases: ['lock'],
  code: `$modifyChannelPerms[$guildID;$get[channel];-sendmessage]
  $addCmdReactions[🔒]
  $setChannelVar[channel;lock;$get[channel]]

  $onlyPerms[managemessages;managechannel;${errormsg.lock.perms}]
  $onlyIf[$getChannelVar[channel;$get[channel]]==lock;${errormsg.lock.locked}]
  $onlyIf[$getChannelVar[channel;$get[channel]]==templock;${errormsg.lock.templocked}]

$let[channel;$replaceText[$replaceText[$checkCondition[$message[1]==];true;$channelID];false;$message[1]]]`
}, {
  name: "unlockchannel",
  aliases: ['unlock'],
  code: `$modifyChannelPerms[$guildID;$get[channel];+sendmessage]
  $addCmdReactions[🔓]
  $setChannelVar[channel;unlock;$get[channel]]

  $onlyPerms[managemessages;managechannel;${errormsg.lock.perms}]
  $onlyIf[$getChannelVar[channel;$get[channel]]==unlock;${errormsg.lock.unlocked}]

$let[channel;$replaceText[$replaceText[$checkCondition[$message[1]!=];true;$channelID];false;$message[1]]]`
}, {
  name: "cooldownlock",
  aliases: ['templock'],
  code: `$setTimeout[templock;$message[1];{"channelID": "$get[channel]",
  "guildID": "$guildID"}]
  $modifyChannelPerms[$guildID;$get[channel];-sendmessage]
  $setChannelVar[channel;templock;$get[channel]]
  $addCmdReactions[🔒]
  $onlyPerms[managemessages;managechannel;${errormsg.lock.perms}]
  $onlyIf[$getChannelVar[channel;$get[channel]]==lock;${errormsg.lock.locked}]
  $onlyIf[$getChannelVar[channel;$get[channel]]==templock;${errormsg.lock.templocked}]

$let[channel;$replaceText[$replaceText[$checkCondition[$message[1]==];true;$channelID];false;$message[1]]]`
}, {
  type: 'timeout',
  name: "templock",
  channel: "$timeoutData[channelID]",
  code: `$modifyChannelPerms[$timeoutData[guildID];$timeoutData[channelID];+sendmessage]
  $channelSendMessage[$timeoutData[channelID];Unlocked!]
  $setChannelVar[channel;unlock;$timeoutData[channelID]]
  `
}]