module.exports = {
  name: "stop",
  aliases: ['stp'],
  code: `$addCmdReactions[<a:white_verified:903247519927132191>]
  $lavalinkExecute[stop]

  $onlyIf[$lavalinkExecute[queueTotal]>0;\`[ERROR]\`: There no query to stops!]
  $onlyIf[$voiceID!=;\`[ERROR]\`: You need to be in a voice channel to use this command!]

  $onlyIf[$checkCondition[$voiceID[$authorID]==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]!=];false;$voiceID[$authorID]];true;$voiceID[$clientID]]]==true;\`[ERROR]\`: I already in differnt voice channels!]
  `
}