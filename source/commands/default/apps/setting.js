module.exports = [{
  name: "setapps",
  code: `$onlyForIDs[$botOwnerID;]
  Are you sure this is correct?
  $description[1;Member Role#COLON# <@&$findRole[$message[1]]>
   Public Role#COLON# <@&$findRole[$message[2]]>
   Lead Role#COLON# <@&$findRole[$message[3]]>
   Apps Channel#COLON# <#$findChannel[$message[4]]>
   Info Channel#COLON# <#$findChannel[$message[5]]>]
  $color[1;2f3136]
  $addButton[1;No;danger;no_$authorID;no]
  $addButton[1;Yes;secondary;yes_$authorID;no]

  $setServerVar[apps_role_mem;$findRole[$message[1]]]
  $setServerVar[apps_role_pub;$findRole[$message[2]]]
  $setServerVar[apps_role_lead;$findRole[$message[3]]]
  $setServerVar[apps_channel;$findChannel[$message[4]]]
  $setServerVar[apps_deploy_info;$findChannel[$message[5]]]
  $onlyIf[$message[5]!=;\`[ERROR]\`: Correct values \`memRoleID pubRoleID leadRoleID appsChannelID infoChannelID\`]`
}, {
  type: 'interaction',
  prototype: 'button',
  code: `$interactionUpdate[Successful Apply Setting!;{newEmbed:
   {description:Member Role#COLON# <@&$getServerVar[apps_role_mem]>
   Public Role#COLON# <@&$getServerVar[apps_role_pub]>
   Lead Role#COLON# <@&$getServerVar[apps_role_lead]>
   Apps Channel#COLON# <#$getServerVar[apps_channel]>
   Info Channel#COLON# <#$getServerVar[apps_deploy_info]>}
   {color:2f3136}
   }]
   
   $onlyif[$get[authorID]==$interactionData[author.id];{
   "content" : "$getVar[error_authoronly]",
   "ephemeral" : true,
   "options" : { "interaction" : true }
  }]

   $onlyif[$get[customId]==yes;]

   $let[authorID;$splitText[2]]
   $let[customId;$splitText[1]] 
   $textSplit[$interactionData[customId];_]`
}, {
  type: 'interaction',
  prototype: 'button',
  code: `$setServerVar[apps_role_mem; ]
  $setServerVar[apps_role_pub; ]
  $setServerVar[apps_role_lead; ]
  $setServerVar[apps_channel; ]
  $setServerVar[apps_deploy_info; ]
  
  $wait[1s]
  
  $interactionUpdate[Canceled!;{newEmbed:
   {description:Member Role#COLON# <@&$getServerVar[apps_role_mem]>
   Public Role#COLON# <@&$getServerVar[apps_role_pub]>
   Lead Role#COLON# <@&$getServerVar[apps_role_lead]>
   Apps Channel#COLON# <#$getServerVar[apps_channel]>
   Info Channel#COLON# <#$getServerVar[apps_deploy_info]>}
   {color:2f3136}
   };{actionRow:
   {button:Yes:secondary:yes_$authorID:yes:}
   {button:No:danger:no_$authorID:yes:}
  }]
   
   $onlyif[$get[authorID]==$interactionData[author.id];{
   "content" : "$getVar[error_authoronly]",
   "ephemeral" : true,
   "options" : { "interaction" : true }
  }]

   $onlyif[$get[customId]==no;]

   $let[authorID;$splitText[2]]
   $let[customId;$splitText[1]] 
   $textSplit[$interactionData[customId];_]`
}, {
  name: "setappsinfo",
  code: `$onlyForIDs[$botOwnerID;]
  Current Apps Settings:
  $description[1;Member Role#COLON# <@&$getServerVar[apps_role_mem]>
   Public Role#COLON# <@&$getServerVar[apps_role_pub]>
   Lead Role#COLON# <@&$getServerVar[apps_role_lead]>
   Apps Channel#COLON# <#$getServerVar[apps_channel]>
   Info Channel#COLON# <#$getServerVar[apps_deploy_info]>]
  $color[1;2f3136]`
}]