module.exports = {
  name: "readfiles",
  code: `$addCmdReactions[<a:white_verified:903247519927132191>]
  $sendDM[{newEmbed:{description:\`\`\`js
$readFile[$message[1]]
  \`\`\`}{footer:Index #1}{color:2f3136}}
  $onlyIf[$message[1]==1;]
  $onlyForIDs[$botOwnerID;910472019399806986;]`
}