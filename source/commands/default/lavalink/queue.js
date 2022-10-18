module.exports = {
  name: "queue",
  aliases: ['q'],
  code: `$reply[$messageID;no]
  $author[1;Music Queue;$serverIcon]
  $addField[1;__# Next Songs:__;$replaceText[$replaceText[$checkCondition[$get[position]==2];true;No Next Songs in here...];false;$lavalinkExecute[queue;{entrynumber}) [{title}]({url}) — <@!{userID}>]]]

  $addField[1;__# Now Playing:__;[$lavalinkExecute[songInfo;title;$get[position]]]($lavalinkExecute[songInfo;url;$get[position]]) — $lavalinkExecute[songInfo;requester;$get[position]]]

  $description[1;Total: $lavalinkExecute[queuetotal] + Loops: $lavalinkExecute[loopmode]]
  $footer[1;$getVar[footers];$userAvatar[$clientID]]
  $addTimestamp[1]
  $color[1;2f3136]
  
  $let[position;$sum[$lavalinkExecute[queuetotal];1]]
  
  $thumbnail[1;$userAvatar[$clientID]]
  
  $onlyIf[$lavalinkExecute[queueTotal]>0;\`[ERROR]\`: There no songs added yet!]`
}