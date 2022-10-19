module.exports = [{
  name: "unrep",
  type: 'presenceUpdate',
  channel: "963645892974485564",
  code: `$takeRole[780615998251597854;$authorID;965174162475859978]
 $onlyIf[$checkContains[$getCustomStatus[$authorID;780615998251597854;state];/gowon]==false;]
  $onlyIf[$hasAnyRole[780615998251597854;$authorID;965174162475859978]==true;]

  $onlyIf[$isBot[$authorID]==false;]
  $onlyIf[$guildID==780615998251597854;]
  $suppressErrors`
}, {
  name: "rep",
  type: 'presenceUpdate',
  channel: "963645892974485564",
  code: `$giveRole[780615998251597854;$authorID;965174162475859978]

  $useChannel[963645892974485564]
  $author[1;$userTag[$authorID];$userAvatar[$authorID]]
  $description[1;thanks for rep us by using [/gowon](https://dsc.gg/gowon)_!_
support us by using [/gowon](https://dsc.gg/gowon) on your status <3]
  $color[1;$getServerVar[color]]
  $addTimestamp[1]
  $footer[1;$getVar[footer];$userAvatar[$clientID]]

  $onlyIf[$checkContains[$getCustomStatus[$authorID;780615998251597854;state];/gowon]==true;]

  $onlyIf[$isBot[$authorID]==false;]
  $onlyIf[$guildID==780615998251597854;]
  $suppressErrors`

}]