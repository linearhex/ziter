module.exports = {
  name: "loop",
  aliases: ['lp'],
  $if: 'v4',
  code: `$reply
  $if[$message[1]==one]
  $let[song;$lavalinkExecute[loopsong;track]]
  $addCmdReactions[<a:white_verified:903247519927132191>]
  $endif
  
  $if[$message[1]==queue]
  $let[queue;$lavalinkExecute[loopqueue;queue]]
  $addCmdReactions[<a:white_verified:903247519927132191>]
  $endif
  
  $if[$message[1]==off]
  $let[off;$lavalinkExecute[$replaceText[$replaceText[$lavalinkExecute[loopmode];Queue;loopqueue];Track;loopsong];none]]
  $addCmdReactions[<a:white_verified:903247519927132191>]
  $endif
  
  $onlyIf[$replaceText[$replaceText[$replaceText[$message[1];one;Track];queue;Queue];off;None]!=$lavalinkExecute[loopmode];\`[ERROR]\`: The loops already set to $replaceText[$replaceText[$replaceText[$lavalinkExecute[loopmode];Track;songs];Queue;queues];None;off]]
  
  $onlyIf[$message[1]!=;\`[ERROR]\`: Please provieded value, ex: \`one | queue | off\`]`
}