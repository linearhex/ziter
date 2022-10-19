module.exports = [{
 name: 'play',
 aliases: ['p'],
 code: `
$reply
 $color[1;2f3136]
 $author[1;$replaceText[$replaceText[$lavalinkExecute[isPlaying];true;Added Track:];false;Now Playing:];$authorAvatar]

 $title[1;<a:diskrotate:916975799888932885> $lavalinkExecute[songInfo;title;$get[position]];$lavalinkExecute[songInfo;url;$get[position]]]

$addButton[1;# Duration: $get[durations];secondary;durationss;no;<a:diskrotate:916975799888932885>]

$addButton[1;# Position: $replaceText[$replaceText[$checkCondition[$sub[$lavalinkExecute[queuetotal];1]!=0];false;Current];true;$ordinal[$sub[$lavalinkExecute[queuetotal];1]]];secondary;positionss;no;<a:diskrotate:916975799888932885>]

$addButton[2;# Requested by $userTag[$authorID];secondary;idkhelp;no;<a:diskrotate:916975799888932885>]

 $footer[1;$getVar[footer];$userAvatar[$clientID]]
 $thumbnail[1;https://cdn.discordapp.com/attachments/901452559515000922/966261132153196614/image-removebg-preview_20.png]

$addTimestamp[1]

$let[play;$lavalinkExecute[$replaceText[$replaceText[$lavalinkExecute[isIdling];true;play];false;volume]]]
$log[$lavalinkExecute[isIdling]|$lavalinkExecute[isPlaying]|$lavalinkExecute[isPaused]]
$let[durations;$replaceText[$lavalinkExecute[songinfo;duration;$get[position]];#COLON#;᎓]]
$let[position;$sub[$lavalinkExecute[queuetotal];1]]
$let[a;$lavalinkExecute[addtrack;$get[key];1]]
$let[key;$lavalinkExecute[search;$replaceText[$get[query];--audio;];$replaceText[$replaceText[$checkContains[$get[query];--audio];true;ytm];false;yt]]]
$let[query;$message]

$lavalinkExecute[connect]

$onlyIf[$message!=;\`[ERROR]\`: I need a song to play!]
$onlyIf[$voiceID!=;\`[ERROR]\`: You need to be in a voice channel to use this command!]
$onlyIf[$checkCondition[$voiceID[$authorID]==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]!=];false;$voiceID[$authorID]];true;$voiceID[$clientID]]]==true;\`[ERROR]\`: I already in differnt voice channels!]`
}, {
  name: "durationss",
  type: 'interaction',
  prototype: "button",
  $if: 'v4',
  code: `$if[$checkCondition[$lavalinkExecute[queueTotal]>0]==true]
$interactionReply[;{newEmbed:{author:Now Playing#COLON#:$userAvatar[$findUser[$lavalinkExecute[songinfo;requester;$get[positions]]]]}{title:$lavalinkExecute[songInfo;title;$get[positions]]}{url:$lavalinkExecute[songInfo;url;$get[positions]]}{description:\`$lavalinkExecute[songinfo;current_duration;$get[positions]]\` $getObjectProperty[bar] \`$lavalinkExecute[songinfo;duration;$get[positions]]\`}{field:__# Requested#COLON#__:$lavalinkExecute[songinfo;requester;$get[positions]]:yes}{field:__# Volumes#COLON#__:$lavalinkExecute[volume]%:yes}{field:__# Paused#COLON#__:$replaceText[$replaceText[$lavalinkExecute[isPaused];true;Yes];false;No]:yes}{thumbnail:$userAvatar[$clientID]}{footer:$getVar[footers]:$userAvatar[$clientID]}{color:2f3136}{timestamp}};;;everyone;yes]

$djsEval[const util = require('dbd.js-utils')
d.object.bar = util.progressBar($get[current], $get[duration], 20, "<a:diskrotate:916975799888932885>", "─", "─")]
$createObject[{}]

$let[positions;$sum[$lavalinkExecute[queuetotal];1]]

$let[current;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==3];true;$parseTime[$splitText[1]h $splitText[2]m $splitText[3]s] $textSplit[$lavalinkExecute[songinfo;current_duration];:]];false;$parseTime[$splitText[1]m $splitText[2]s] $textSplit[$lavalinkExecute[songinfo;current_duration];:]]
$textSplit[$lavalinkExecute[songinfo;current_duration];:]]

$let[duration;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==3];true;$parseTime[$splitText[1]h $splitText[2]m $splitText[3]s] $textSplit[$lavalinkExecute[songinfo;duration];:]];false;$parseTime[$splitText[1]m $splitText[2]s] $textSplit[$lavalinkExecute[songinfo;duration];:]]
$textSplit[$lavalinkExecute[songinfo;duration];:]]
$endif

$if[$checkCondition[$lavalinkExecute[queueTotal]>0]==false]
$interactionReply[\`[ERROR]\`: There no song queue's!;;;;everyone;yes]
$endif`
}, {
  name: "positionss",
  type: 'interaction',
  prototype: "button",
  $if: 'v4',
  code: `$if[$checkCondition[$lavalinkExecute[queueTotal]>0]==true]
$interactionReply[;{newEmbed:{author:# Music Queue's:$serverIcon}{description:Total#COLON# $lavalinkExecute[queuetotal] + Loops#COLON# $lavalinkExecute[loopmode]}{field:__# Now Playing#COLON#__:[$lavalinkExecute[songInfo;title;$get[position]]]($lavalinkExecute[songInfo;url;$get[position]]) — $lavalinkExecute[songInfo;requester;$get[position]]}{field:__# Next Songs#COLON#__:$replaceText[$replaceText[$checkCondition[$get[position]==2];true;No Next Songs in here...];false;$lavalinkExecute[queue;{entrynumber}) [{title}]({url}) — <@!{userID}>]]}{footer:$getVar[footers]:$userAvatar[$clientID]}{thumbnail:$userAvatar[$clientID]}{color:2f3136}{timestamp}};;;everyone;yes]

 $let[position;$sum[$lavalinkExecute[queuetotal];1]]
$endif

$if[$checkCondition[$lavalinkExecute[queueTotal]>0]==false]
$interactionReply[\`[ERROR]\`: There no songs added yet!;;;;everyone;yes]
$endif`
}, {
  name: "loader",
  aliases: ['load'],
  code: `

$let[a;$lavalinkExecute[$replaceText[$replaceText[$lavalinkExecute[isIdling];true;play];false;isIdling]]
$lavalinkExecute[addtrack;$lavalinkExecute[search;$message];1]]

`
}]