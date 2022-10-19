module.exports = {
  name: "onTrackStart",
  type: "trackStart",
  channel: "$channelID",
  code: `$useChannel[$channelID]
$color[1;2f3136]
 $author[1;Now Playing:;$userAvatar[$songInfo[user.id;current]]]

 $title[1;<a:diskrotate:916975799888932885> $songInfo[title;current];$songInfo[url;current]]

$addButton[1;# Requested by $userTag[$songInfo[user.id;current]];secondary;vc;no;<a:diskrotate:916975799888932885>]

$addButton[1;# Duration: $get[duration];secondary;durations;no;<a:diskrotate:916975799888932885>]

$addButton[1;# Queue Total : $ordinal[$queueLength];secondary;positions;no;<a:diskrotate:916975799888932885>]

 $footer[1;$getVar[footer];$userAvatar[$clientID]]
 $thumbnail[1;https://cdn.discordapp.com/attachments/901452559515000922/966261132153196614/image-removebg-preview_20.png]

$addTimestamp[1]

$let[position;$sub[$queueLength;1]]
$let[duration;$humanizeMS[$songInfo[duration;current]]`
}