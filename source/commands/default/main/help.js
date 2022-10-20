module.exports = [{
  name: "help",
  code: `$onlyForIDs[$botOwnerID;On Maintenace]
  $author[1;⨯ . ⁺ ✦ ZITER Bots Help Commands +;$userAvatar[$authorID]]
  $description[1;**— My Prefix is \`$getVar[prefix]\`**
.    Select category below to see all category of My __Commands!__

**— Usages Params/Symbols for examples:**
.   #commands \`[require]\` & #commands \`(optional)\`
.   Note: _"Don't Including \`[]\` and \`()\`, It Will Not Working or Errors."_

**— Developers by:**
<@$botOwnerID> / $userTag[$botOwnerID]

# Version : __\`2022.10\`__  #SEMI# More Comands Info, Type \`#cmdinfo [commands]\`]
  $color[1;2f3136]
  $thumbnail[1;$userAvatar[$clientID]]
  $footer[1;$getVar[footer];$serverIcon]
  $addTimestamp[1]
  $addSelectMenu[1;help_$authorID;Click 4 More Category Command!;1;1;no;
Music:⨯ [FREE TO USE]:musics:no:<:number_one:888303236652605500>;
Utility:⨯ [FREE TO USE]:utils:no:<:number_two:888303335780806656>;
Apps:⨯ [ADMIN ONLY]:apps:no:<:number_three:888303360996933682>;
Game:⨯ [FREE TO USE]:games:no:<:number_four:888303393758674946>;
Mod:⨯ [ADMIN ONLY]:mods:no:<:number_four:888303393758674946>]
  $addButton[2;$getVar[footer];link;https://instagram.com/explore/tags/zitergp;no;<:link:888306636857421864>]
  $addButton[2;Member Count: $membersCount;link;https://dsc.gg/zitergp;no;<:plus:888307778668601345>]
 $addButton[2;Ends Interaction;secondary;endsinteract_$authorID;no;<a:whitesparkle:941296331941638154>]`

  /**
   for $addSelectMenu options => [title:description:values:disable:emojis]

   for {selectMenuOptions} => [title:values:description:default:emojis]

   select menu onlyif : $onlyIf[$interactionData[values[0]]==optionss]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]

   button onlyif : $onlyif[$advancedTextSplit[$interactionData[customId];_;1]==customid;]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]
  **/
  
}, {
  //music
  type: 'interaction',
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:
{author:⨯ . ⁺ ✦  [MUSIC] Commands:$userAvatar[$authorID]}
{description:**\`#play [title] (--audio / empty)\`**
— To play a song from Youtube! (For \`--audio\` It's from Youtube Music),

**\`#pause\` & \`#resume\`**
— To pause or resume current song!,

**\`#loop [one / queue / off]\`**
— To loops the songs, Chosee one option!,

**\`#nowplaying\`**
— To See info current played songs!,

**\`#queue\`**
— To See queued/requested songs!,

**\`#skip (position)\`**
— To skip songs, Optional is position!,

**\`#stop\`**
— To stop songs, This command won't leaving from vc!,

**\`#volume\`**
— To change volumes!,

**\`#disconnect\`**
— To leaving/disconnect from vc!,

**\`#summon\`**
— To joining vc!}
{color:2f3136}
{timestamp}
{footer:$getVar[footer]:$serverIcon}
{thumbnail:$userAvatar[$clientID]}
}
;
{actionRow:{selectMenu:help_$authorID:Click 4 More Category Command!:1:1:no:{selectMenuOptions:Music:musics:⨯ [FREE TO USE]:yes:<:number_one:888303236652605500>}
{selectMenuOptions:Utility:utils:⨯ [FREE TO USE]:no:<:number_two:888303335780806656>}
{selectMenuOptions:Apps:apps:⨯ [ADMIN ONLY]:no:<:number_three:888303360996933682>}
{selectMenuOptions:Game:games:⨯ [FREE TO USE]:no:<:number_four:888303393758674946>}
{selectMenuOptions:Mod:mods:⨯ [ADMIN ONLY]:no:<:number_four:888303393758674946>}}

{actionRow:{button:$getVar[footer]:link:https#COLON#//instagram.com/explore/tags/zitergp:no:<:link:888306636857421864>}
{button:Main Pages:secondary:back_$authorID:no:<a:whitesparkle:941296331941638154>}
{button:Ends Interaction:secondary:endsinteract_$authorID:no:<a:whitesparkle:941296331941638154>}
}
;]

$onlyIf[$interactionData[values[0]]==musics]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]`
  
}, {
  //utility
  type: 'interaction',
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:
{author:⨯ . ⁺ ✦  [UTILITY] Commands:$userAvatar[$authorID]}
{description:**\`#avatar (user / server)\`**
— To see users or server avatar!,

**\`#botinfo\`**
— To see ZITER bots stats!,

**\`#dm [user] [message]\`**
— To send direct message!,

**\`#membercount\`**
— To See all members count!,

**\`#serverinfo\`**
— To See Server Informations!,

**\`#userinfo (user)\`**
— To See Users Informations, Optional is user!,

**\`#uptime\`**
— To See Uptime Online!,

**\`#translate [language] [text]\`**
— To Translate given text!,

**\`#languages\`**
— To See list languages!}
{color:2f3136}
{timestamp}
{footer:$getVar[footer]:$serverIcon}
{thumbnail:$userAvatar[$clientID]}
}
;
{actionRow:{selectMenu:help_$authorID:Click 4 More Category Command!:1:1:no:{selectMenuOptions:Music:musics:⨯ [FREE TO USE]:no:<:number_one:888303236652605500>}
{selectMenuOptions:Utility:utils:⨯ [FREE TO USE]:yes:<:number_two:888303335780806656>}
{selectMenuOptions:Apps:apps:⨯ [ADMIN ONLY]:no:<:number_three:888303360996933682>}
{selectMenuOptions:Game:games:⨯ [FREE TO USE]:no:<:number_four:888303393758674946>}
{selectMenuOptions:Mod:mods:⨯ [ADMIN ONLY]:no:<:number_four:888303393758674946>}}

{actionRow:{button:$getVar[footer]:link:https#COLON#//instagram.com/explore/tags/zitergp:no:<:link:888306636857421864>}
{button:Main Pages:secondary:back_$authorID:no:<a:whitesparkle:941296331941638154>}
{button:Ends Interaction:secondary:endsinteract_$authorID:no:<a:whitesparkle:941296331941638154>}
}
;]

$onlyIf[$interactionData[values[0]]==utils]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]`
  
}, {
  //apps
  type: 'interaction',
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:
{author:⨯ . ⁺ ✦  [APPS] Commands:$userAvatar[$authorID]}
{description:**\`#accept [user]\`**
— To accept an user!,

**\`#remove [user]\`**
— To remove an user!,

**\`#appsopen\` or \`#appsclose\`**
— To closing or opening apps!}
{color:2f3136}
{timestamp}
{footer:$getVar[footer]:$serverIcon}
{thumbnail:$userAvatar[$clientID]}
}
;
{actionRow:{selectMenu:help_$authorID:Click 4 More Category Command!:1:1:no:{selectMenuOptions:Music:musics:⨯ [FREE TO USE]:no:<:number_one:888303236652605500>}
{selectMenuOptions:Utility:utils:⨯ [FREE TO USE]:no:<:number_two:888303335780806656>}
{selectMenuOptions:Apps:apps:⨯ [ADMIN ONLY]:yes:<:number_three:888303360996933682>}
{selectMenuOptions:Game:games:⨯ [FREE TO USE]:no:<:number_four:888303393758674946>}
{selectMenuOptions:Mod:mods:⨯ [ADMIN ONLY]:no:<:number_four:888303393758674946>}}

{actionRow:{button:$getVar[footer]:link:https#COLON#//instagram.com/explore/tags/zitergp:no:<:link:888306636857421864>}
{button:Main Pages:secondary:back_$authorID:no:<a:whitesparkle:941296331941638154>}
{button:Ends Interaction:secondary:endsinteract_$authorID:no:<a:whitesparkle:941296331941638154>}
}
;]

$onlyIf[$interactionData[values[0]]==apps]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]`

}, {
  //game
  type: 'interaction',
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:
{author:⨯ . ⁺ ✦  [GAME] Commands:$userAvatar[$authorID]}
{description:**\`#8ball [question]\`**
— To Thinking 8ball for your question!

__**NOTE#COLON#**__ We still working for others game commands, theres a bugs to fix right now...}
{color:2f3136}
{timestamp}
{footer:$getVar[footer]:$serverIcon}
{thumbnail:$userAvatar[$clientID]}
}
;
{actionRow:{selectMenu:help_$authorID:Click 4 More Category Command!:1:1:no:{selectMenuOptions:Music:musics:⨯ [FREE TO USE]:no:<:number_one:888303236652605500>}
{selectMenuOptions:Utility:utils:⨯ [FREE TO USE]:no:<:number_two:888303335780806656>}
{selectMenuOptions:Apps:apps:⨯ [ADMIN ONLY]:no:<:number_three:888303360996933682>}
{selectMenuOptions:Game:games:⨯ [FREE TO USE]:yes:<:number_four:888303393758674946>}
{selectMenuOptions:Mod:mods:⨯ [ADMIN ONLY]:no:<:number_four:888303393758674946>}}

{actionRow:{button:$getVar[footer]:link:https#COLON#//instagram.com/explore/tags/zitergp:no:<:link:888306636857421864>}
{button:Main Pages:secondary:back_$authorID:no:<a:whitesparkle:941296331941638154>}
{button:Ends Interaction:secondary:endsinteract_$authorID:no:<a:whitesparkle:941296331941638154>}
}
;]

$onlyIf[$interactionData[values[0]]==games]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]`

  }, {
  //mods
  type: 'interaction',
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:
{author:⨯ . ⁺ ✦  [MODERATOR] Commands:$userAvatar[$authorID]}
{description:**\`#ban [user] (reason)\` & \`#kick [user] (reason)\`**
— To banned / kick  users, Optional is Reason!,

**\`#tempban [user] [time] (reason)\`**
— To banned temporary, Optional is Reason!,

**\`#lock (channel)\` or \`#unlock (channel)\` & \`#templock [time] (channel)\`**
— To lock or unlock and temporary lock, Optional is Channel!,

**\`#giverole [user] [role]\` or \`#takerole [user] [role]\`**
— To give or remove users Role!
}
{color:2f3136}
{timestamp}
{footer:$getVar[footer]:$serverIcon}
{thumbnail:$userAvatar[$clientID]}
}
;
{actionRow:{selectMenu:help_$authorID:Click 4 More Category Command!:1:1:no:{selectMenuOptions:Music:musics:⨯ [FREE TO USE]:no:<:number_one:888303236652605500>}
{selectMenuOptions:Utility:utils:⨯ [FREE TO USE]:no:<:number_two:888303335780806656>}
{selectMenuOptions:Apps:apps:⨯ [ADMIN ONLY]:no:<:number_three:888303360996933682>}
{selectMenuOptions:Game:games:⨯ [FREE TO USE]:no:<:number_four:888303393758674946>}
{selectMenuOptions:Mod:mods:⨯ [ADMIN ONLY]:yes:<:number_four:888303393758674946>}}

{actionRow:{button:$getVar[footer]:link:https#COLON#//instagram.com/explore/tags/zitergp:no:<:link:888306636857421864>}
{button:Main Pages:secondary:back_$authorID:no:<a:whitesparkle:941296331941638154>}
{button:Ends Interaction:secondary:endsinteract_$authorID:no:<a:whitesparkle:941296331941638154>}
}
;]

$onlyIf[$interactionData[values[0]]==mods]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]`

}, {
  //ends interact
  type: 'interaction',
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:
{description: This menu was ended by <@!$interactionData[author.id]>, Please retype \`#help\` to see again!}
{color:2f3136}
{timestamp}
{footer:$getVar[footer]:$serverIcon}
{thumbnail:$userAvatar[$clientID]}
}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;1]==endsinteract;]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]`

  }, {
  //main pages button
  type: 'interaction',
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:
{author:⨯ . ⁺ ✦ Modify Bots Help Commands +:$userAvatar[$authorID]}
{description:**— My Prefix is \`$getVar[prefix]\`**
.    Select category below to see all category of My __Commands!__

**— Usages Params/Symbols for examples#COLON#**
.   #commands \`[require]\` & #commands \`(optional)\`
.   Note: _"Don't Including \`[]\` and \`()\`, It Will Not Working or Errors."_

**— Developers by#COLON#**
<@$botOwnerID> / $userTag[$botOwnerID]

# Version #COLON# __\`11.2.03-dev\`__  #SEMI# More Comands Info, Type \`#cmdinfo [commands]\`!}
{color:2f3136}
{timestamp}
{footer:$getVar[footer]:$serverIcon}
{thumbnail:$userAvatar[$clientID]}
};
{actionRow:{selectMenu:help_$authorID:Click 4 More Category Command!:1:1:no:{selectMenuOptions:Music:musics:⨯ [FREE TO USE]:no:<:number_one:888303236652605500>}
{selectMenuOptions:Utility:utils:⨯ [FREE TO USE]:no:<:number_two:888303335780806656>}
{selectMenuOptions:Apps:apps:⨯ [ADMIN ONLY]:no:<:number_three:888303360996933682>}
{selectMenuOptions:Game:games:⨯ [FREE TO USE]:no:<:number_four:888303393758674946>}
{selectMenuOptions:Mod:mods:⨯ [ADMIN ONLY]:no:<:number_four:888303393758674946>}}}

{actionRow:{button:Ends Interaction:secondary:endsinteract_$authorID:no:<a:whitesparkle:941296331941638154>}
{button:Member Count#COLON# $membersCount:link:https#COLON#//dsc.gg/zitergp:no:<:plus:888307778668601345>}
{button:$getVar[footer]:link:https#COLON#//instagram.com/explore/tags/zitergp:no:<:link:888306636857421864>}}
]

$onlyif[$advancedTextSplit[$interactionData[customId];_;1]==back;]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]`
}]
