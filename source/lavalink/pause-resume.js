module.exports = [{
  name: "pause",
  aliases: ['paused'],
  code: `$addCmdReactions[<a:white_verified:903247519927132191>]
  $lavalinkExecute[pause]

  $onlyIf[$lavalinkExecute[queueTotal]>0;\`[ERROR]\`: There no query to pause!]
  $onlyIf[$voiceID!=;\`[ERROR]\`: You need to be in a voice channel to use this command!]

  $onlyIf[$checkCondition[$voiceID[$authorID]==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]!=];false;$voiceID[$authorID]];true;$voiceID[$clientID]]]==true;\`[ERROR]\`: I already in differnt voice channels!]`
}, {
  name: "resume",
  aliase: ['resumed'],
  code: `$addCmdReactions[<a:white_verified:903247519927132191>]
  $lavalinkExecute[resume]

  $onlyIf[$lavalinkExecute[queueTotal]>0;\`[ERROR]\`: There no query to resume!]
  $onlyIf[$voiceID!=;\`[ERROR]\`: You need to be in a voice channel to use this command!]

  $onlyIf[$checkCondition[$voiceID[$authorID]==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]!=];false;$voiceID[$authorID]];true;$voiceID[$clientID]]]==true;\`[ERROR]\`: I already in differnt voice channels!]`
}]