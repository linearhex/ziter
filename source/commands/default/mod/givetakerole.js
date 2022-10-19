module.exports = [{
  name: "takerole",
  aliases: ['roletake'],
  code: `$takeRole[$guildID;$findUser[$message[1]];$findRole[$message[2]]]
  
  $description[1;Taking <@&$findRole[$message[2]]> role to <@$findUser[$message[1]]>]
  $footer[1;Taken by $userTag[$authorID]]
  $color[1;2f3136]
  
  $onlyPerms[manageroles;manageserver;You don't have perms to do that.]
  
  $onlyIf[$message[2]!=;Please mention or copy id user and role!]
  
  $onlyIf[$memberExists[$findUser[$message[1]];$guildID]==true;Invalid Users]

  $onlyIf[$hasRoles[$guildID;$findUser[$message[1]];$findRole[$message[2]]]==true;You're already taken the roles.]
  
  $onlyIf[$roleExists[$findRole[$message[2]];$guildID]==true;Invalid Roles]`
}, {
  name: "giverole",
  aliases: ['rolegive'],
  code: `$giveRole[$guildID;$findUser[$message[1]];$findRole[$message[2]]]
  
  $description[1;Giving <@&$findRole[$message[2]]> role to <@$findUser[$message[1]]>]
  $footer[1;Given by $userTag[$authorID]]
  $color[1;2f3136]
  
  $onlyPerms[manageroles;manageserver;You don't have perms to do that.]
  
  $onlyIf[$message[2]!=;Please mention or copy id user and role!]

  $onlyIf[$hasRoles[$guildID;$findUser[$message[1]];$findRole[$message[2]]]==false;You're already given the roles.]
  
  $onlyIf[$memberExists[$findUser[$message[1]];$guildID]==true;Invalid Users]
  
  $onlyIf[$roleExists[$findRole[$message[2]];$guildID]==true;Invalid Roles]`
}]