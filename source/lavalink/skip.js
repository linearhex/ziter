module.exports = {
  name: "skip",
  aliases: ['s'],
  $if: 'v4',
  code: `$if[$isNumber[$message[1]]==false]
  $lavalinkExecute[skip]
  $addCmdReactions[<a:white_verified:903247519927132191>]

  $elseIf[$isNumber[$message[1]]==true]
  $reply Skipped to $ordinal[$message[1]] $lavalinkExecute[skip;$message[1]]
  
  $endelseIf
  $endif
  
  $onlyIf[$lavalinkExecute[queueTotal]>1;\`[ERROR]\`: There no query to skips!]
  
  $onlyIf[$voiceID!=;\`[ERROR]\`: You need to be in a voice channel to use this command!]

  $onlyIf[$checkCondition[$voiceID[$authorID]==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]!=];false;$voiceID[$authorID]];true;$voiceID[$clientID]]]==true;\`[ERROR]\`: I already in differnt voice channels!]
`
}