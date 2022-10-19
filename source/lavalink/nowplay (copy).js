const duration = `$replaceText[$replaceText[$checkCondition[$getTextSplitLength==3];true;$parseTime[$splitText[1]h $splitText[2]m $splitText[3]s] $textSplit[$lavalinkExecute[songinfo;duration];:]];false;$parseTime[$splitText[1]m $splitText[2]s] $textSplit[$lavalinkExecute[songinfo;duration];:]]
$textSplit[$lavalinkExecute[songinfo;duration];:]`
const current = `$replaceText[$replaceText[$checkCondition[$getTextSplitLength==3];true;$parseTime[$splitText[1]h $splitText[2]m $splitText[3]s] $textSplit[$lavalinkExecute[songinfo;current_duration];:]];false;$parseTime[$splitText[1]m $splitText[2]s] $textSplit[$lavalinkExecute[songinfo;current_duration];:]]
$textSplit[$lavalinkExecute[songinfo;current_duration];:]`

module.exports = ({
 name: "nowplay",
 aliases: ['np'],
 code: `$description[1;\`$lavalinkExecute[songinfo;current_duration;$get[positions]]\` $getObjectProperty[bar] \`$lavalinkExecute[songinfo;duration;$get[positions]]\`]
$addField[1;__# Requested:__;$lavalinkExecute[songinfo;requester;$get[positions]];yes]
$addField[1;__# Volumes:__;$lavalinkExecute[volume]%;yes]
$addField[1;__# Paused:__;$replaceText[$replaceText[$lavalinkExecute[isPaused];true;Yes];false;No];yes]
$title[1;$lavalinkExecute[songInfo;title;$get[positions]];$lavalinkExecute[songInfo;url;$get[positions]]]
$thumbnail[1;$userAvatar[$clientID]]
$author[1;Now Playing:;$userAvatar[$findUser[$lavalinkExecute[songinfo;requester;$get[positions]]]]]
$color[1;2f3136]
$footer[1;$getVar[footers];$userAvatar[$clientID]]

$let[positions;$sum[$lavalinkExecute[queuetotal];1]]

$djsEval[const util = require('dbd.js-utils')
d.object.bar = util.progressBar(${current}, ${duration}, 20, "<a:diskrotate:916975799888932885>", "─", "─")]
$createObject[{}]

$onlyIf[$lavalinkExecute[queueTotal]>0;\`[ERROR]\`: There no song queue's!]
`
})