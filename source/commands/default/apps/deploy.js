module.exports = [{
  name: "deployapps",
  code: `$onlyForIDs[$botOwnerID;]
  $deletecommand
 
$image[1;https://media.discordapp.net/attachments/888390554176589824/1023621463271559248/A1B73309-9ECE-45F1-B097-860C936F6BE5.jpg?width=499&height=499]
$color[1;2f3136]
  $title[2;#ZITERGP Apps ♡♡♡]
  $color[2;2f3136]
  $description[2;✧・mbf [**@zitergp**](https://instagram.com/zitergp)
✧・**apply once** a day
✧・only [insta](https://instagram.com/) & [streamable](https://streamble.com) link
✧・2x applies in a day will auto \`decline\`
✧・final results by leads]  
  $footer[2;by #zitergp]
  $addButton[1;♡♡♡ click 4 apply;secondary;applybbutton;no;<a:_:941296331941638154>]
  `
}, {
  name: "applybbutton",
  type: 'interaction',
  prototype: 'button',
  code: `$interactionModal[♡♡♡ ziter apps;applyButton;
  {actionRow:
   {textInput:♡♡♡ insta username [DON'T USE LINK.]:1:instausername:yes: :1:100}
  }
  {actionRow:
   {textInput:♡♡♡ link 4 apply:1:linkapps:yes: :1:100}
  }
]`
}, {
  name: "applyButton",
  type: 'interaction',
  prototype: 'modal',
  code: `$interactionReply[<@$interactionData[author.id]> your apps has been sumbit! check in <#$getServerVar[apps_channel]> channel.;;;;;yes]
  $channelSendMessage[$getServerVar[apps_channel];
  {newEmbed:
   {title:#ZITER APPLICATION}
   {image:https://cdn.discordapp.com/attachments/920527161016864849/1025722206057140304/unknown.png}
   {thumbnail:$serverIcon}
   {field:♡♡♡ discord tag:$userTag[$interactionData[author.id]] | <@$interactionData[author.id]>}
   {field:♡♡♡ insta user:[$replaceText[$textInputValue[instausername];@; ]](https://instagram.com/$replaceText[$textInputValue[instausername];@; ])}
   {field:♡♡♡ link 4 apply:$textInputValue[linkapps]}
   {color:2f3136}
  }
  ]`
}]