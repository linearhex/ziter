const spotifytoken = process.env.spotoken

module.exports = [{
  name: "play",
  aliases: ['p','add'],
  $if: 'v4',
  code: `$if[$checkContains[$message;https://open.spotify.com/track]==true]
  $replaceText[$playTrack[youtube;$get[fff]-$get[xxx]];Added;\`[ADDED]\`: ]

$let[fff;$jsonRequest[https://api.spotify.com/v1/tracks/$advancedTextSplit[$message;/;5]?market=ES&access_token=${spotifytoken};artists#RIGHT#0#LEFT#.name]]
 $let[xxx;$jsonRequest[https://api.spotify.com/v1/tracks/$advancedTextSplit[$message;/;5]?market=ES&access_token=${spotifytoken};name]]
  $endif

$if[$checkContains[$message;https://open.spotify.com/playlist]==true]
$replaceText[$playTrack[spotify;$message];Added;\`[LOADED]\`: ] Songs
$endif

  $if[$checkContains[$message;https://open.spotify.com/]==false]
  $replaceText[$playTrack[youtube;$message];Added;\`[ADDED]\`: ]
  $endif
  
  $if[$hasPlayer==false]
        $joinVc
    $endif

 $onlyIf[$message!=;\`[ERROR]\`: I need a song to play!]
$onlyIf[$voiceID!=;\`[ERROR]\`: You need to be in a voice channel to use this command!]   $onlyIf[$checkCondition[$voiceID[$authorID]==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]!=];false;$voiceID[$authorID]];true;$voiceID[$clientID]]]==true;\`[ERROR]\`: I already in differnt voice channels!]
    `
}, {
  name: "durations",
  type: "interaction",
  prototype: 'button',
  $if: 'v4',
  code: `$if[$checkCondition[$queuelength>0]==true]
$interactionReply[;{newEmbed:{author:Now Playing#COLON#:$userAvatar[$findUser[$songinfo[user.id;current]]]}{title:$songInfo[title;current]}{url:$songInfo[url;current]}{description:\`$advancedTextSplit[$getObjectProperty[current];.;1]\` $getObjectProperty[bar] \`$advancedTextSplit[$getObjectProperty[duration];.;1]\`}{field:__# Requested#COLON#__:<@$songinfo[user.id;current]>:yes}{field:__# Volumes#COLON#__:$volume%:yes}{field:__# Paused#COLON#__:$replaceText[$replaceText[$playerStatus;paused;Yes];playing;No]:yes}{thumbnail:$userAvatar[$clientID]}{footer:$getVar[footer]:$userAvatar[$clientID]}{color:2f3136}{timestamp}};;;everyone;yes]

$djsEval[const util = require('dbd.js-utils')
d.object.duration = util.toMusicDuration($songInfo[duration;current])]

$djsEval[const util = require('dbd.js-utils')
d.object.current = util.toMusicDuration($getCurrentDuration)]

$djsEval[const util = require('dbd.js-utils')
d.object.bar = util.progressBar($getCurrentDuration, $songInfo[duration;current], 20, "<a:diskrotate:916975799888932885>", "─", "─")]
$createObject[{}]
$endif

$if[$checkCondition[$queueLength>0]==false]
$interactionReply[\`[ERROR]\`: There no song queue's!;;;;everyone;yes]
$endif`
}, {
  name: "positions",
  type: 'interaction',
  prototype: "button",
  $if: 'v4',
  code: `$if[$checkCondition[$queueLength<=20]==true]
$interactionReply[;{newEmbed:{author:# Music Queue's:$serverIcon}{description:Total#COLON# $queueLength + Loops#COLON# $toLocaleUpperCase[$loopStatus]}
{field:__# List#COLON#__:$queue[1;20;{position}) [{title}]({url}) — <@!{user.id}>]}{footer:$getVar[footer] | 1/1:$userAvatar[$clientID]}{thumbnail:$userAvatar[$clientID]}{color:2f3136}{timestamp}};;;everyone;yes]

$endif

$if[$checkCondition[$queueLength<=20]==false]
$interactionReply[;{newEmbed:{author:# Music Queue's:$serverIcon}{description:Total#COLON# $queueLength + Loops#COLON# $toLocaleUpperCase[$loopStatus]}
{field:__# List#COLON#__:$queue[1;20;{position}) [{title}]({url}) — <@!{user.id}>]}{footer:$getVar[footer] | 1 / $replaceText[$replaceText[$checkCondition[$queueLength<=21];true;$sum[$truncate[$divide[$queueLength;21]];1]];false;$truncate[$divide[$queueLength;21]]]:$userAvatar[$clientID]}{thumbnail:$userAvatar[$clientID]}{color:2f3136}{timestamp}};;;everyone;yes]

$endif




$if[$checkCondition[$queueLength>0]==false]
$interactionReply[\`[ERROR]\`: There no songs added yet!;;;;everyone;yes]
$endif`
}]