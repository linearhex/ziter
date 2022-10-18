module.exports = {
  name: "summon",
  aliases: ['join'],
  code: `$addCmdReactions[<a:white_verified:903247519927132191>]
  $lavalinkExecute[connect]
  $onlyIf[$voiceID!=;\`[ERROR]\`: You need to be in a voice channel to use this command!]

  $onlyIf[$checkCondition[$voiceID[$authorID]==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]!=];false;$voiceID[$authorID]];true;$voiceID[$clientID]]]==true;\`[ERROR]\`: I already in differnt voice channels!]
  `
}