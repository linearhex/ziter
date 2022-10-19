module.exports = {
  type: 'ready',
  channel: "922014327085617204",
  code: `$title[1;#ZITER Systems is Started!]
  $description[1;started at :
  **<t:$truncate[$divide[$dateStamp;1000]]:R> | <t:$truncate[$divide[$dateStamp;1000]]:d> <t:$truncate[$divide[$dateStamp;1000]]:t>**]
  $color[1;2f3136]
  $log[$userTag[$clientID] is Ready!]
  $setVar[uptime;<t:$truncate[$divide[$dateStamp;1000]]:R> | <t:$truncate[$divide[$dateStamp;1000]]:d> <t:$truncate[$divide[$dateStamp;1000]]:t>]`
}