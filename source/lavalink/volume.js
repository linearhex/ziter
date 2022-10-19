module.exports = {
  name: "volume",
  aliases: ['vol'],
  code: `$addCmdReactions[<a:white_verified:903247519927132191>]
  $lavalinkExecute[volume;$message[1]]

  $onlyIf[$checkCondition[$message[1]>101]==false;The value was to high, max: 100!]
  $onlyIf[$checkContains[$message[1];%;-;+]==false;Do not including with symbols!]

  $onlyIf[$message[1]!=;Please type a volume values]
  $onlyIf[$isNumber[$message[1]]==true;Please type correct number value!]

  $onlyIf[$lavalinkExecute[queueTotal]>0;\`[ERROR]\`: There no query to modifed volumes!]
  $onlyIf[$voiceID!=;\`[ERROR]\`: You need to be in a voice channel to use this command!]

  $onlyIf[$checkCondition[$voiceID[$authorID]==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]!=];false;$voiceID[$authorID]];true;$voiceID[$clientID]]]==true;\`[ERROR]\`: I already in differnt voice channels!]`
}